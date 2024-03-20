package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dao.AccountDao;
import com.dkslgg.record.model.dao.MatchDao;
import com.dkslgg.record.model.dto.api.AccountDto;
import com.dkslgg.record.model.dto.api.MatchDto;
import com.dkslgg.record.model.dto.api.ParticipantDto;
import com.dkslgg.record.model.dto.response.MatchReadResponseDto;
import com.dkslgg.record.model.dto.response.ParticipantReadResponseDto;
import com.dkslgg.record.model.vo.AccountVo;
import com.dkslgg.record.model.vo.MatchVo;
import com.dkslgg.record.model.vo.ParticipantItemVo;
import com.dkslgg.record.model.vo.ParticipantVo;
import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RiotApiUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecordServiceImpl implements RecordService {

    private final RiotApiUtil riotApiUtil;
    private final AccountDao accountDao;
    private final MatchDao matchDao;

    /**
     * 닉네임을 통해 PUUID를 조회하는 메소드
     * riotId 형식: {게임이름}#{태그}
     */
    @Override
    @Transactional(rollbackFor = RecordException.class)
    public String readPuuidByRiotId(String riotId) {
        String[] idSplit = riotId.split("#");
        if (idSplit.length != 2) {  // 게임 닉네임과 태그 이름이 정상적으로 삽입되지 않았을 경우
            log.error("RecordService.readPuuidByRiotId id 분할 안 됨.");
            throw new RecordException(ErrorMessage.RIOT_ID_NOT_FOUND);
        }

        /* 게임 닉네임과 태그 이름 분리 */
        String gameName = riotApiUtil.formatRiotId(idSplit[0]);
        String tagLine = riotApiUtil.formatRiotId(idSplit[1]);

        String puuid = accountDao.selectPuuidByGameNameAndTagLine(gameName, tagLine);
        AccountDto accountDto;

        /* Riot API를 통해 PUUID 조회 */
        if (puuid == null || puuid.isBlank()) {  // 조회된 PUUID가 존재하지 않을 경우
            accountDto = riotApiUtil.requestPuuidByRiotId(gameName, tagLine);
            if (accountDto == null) {  // 해당 유저 정보가 삽입되지 않았을 경우
                throw new RecordException(ErrorMessage.RIOT_API_FAILED);
            }
            puuid = accountDto.puuid();
            insertAccount(AccountDto.builder()
                    .puuid(puuid).gameName(gameName).tagLine(tagLine)
                    .build());  // PUUID를 DB에 저장
        }
        return puuid;
    }

    /**
     * 최대 10개의 최근 게임 리스트를 가져오는 메소드
     */
    @Override
    @Transactional(readOnly = true)
    public List<String> readMatchListByPuuid(String puuid, String startTime) {
        if (accountDao.countByPuuid(puuid) != 1) {  // DB에서 PUUID 찾지 못할 경우
            log.error("RecordService.readMatchListByPuuid PUUID 존재 X");
            throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
        }

        return riotApiUtil.requestMatchListByPuuid(puuid, startTime);
    }

    /**
     * 게임 정보를 가져오는 메소드
     */
    @Override
    @Transactional(rollbackFor = RecordException.class)
    public MatchReadResponseDto readMatchByMatchId(String matchId) {
        MatchVo match = matchDao.selectByMatchId(matchId);

        if(match == null) {
            MatchDto matchDto = riotApiUtil.requestMatchByMatchId(matchId);
            if (matchDto == null) {  // 매치 정보가 조회되지 않을 경우
                throw new RecordException(ErrorMessage.MATCH_INVALID);
            }
            insertMatch(matchDto);
            match = matchDao.selectByMatchId(matchId);
        }
        //match = matchDao.selectByMatchId(matchId);

        List<ParticipantVo> participantList = matchDao.selectParticipantsByMatchId(matchId);

        List<ParticipantReadResponseDto> participantDtoList = new ArrayList<>();
        for (ParticipantVo participant : participantList) {
            List<Integer> participantItemList = matchDao.selectParticipantsItemIdByMatchIdAndPuuid(matchId, participant.getPuuid());
            AccountVo account = accountDao.selectByPuuid(participant.getPuuid());
            participantDtoList.add(ParticipantReadResponseDto.builder()
                    .gameName(account.getGameName())
                    .tagLine(account.getTagLine())
                    .champId(participant.getChampId())
                    .champLevel(participant.getChampLevel())
                    .kill(participant.getKill())
                    .death(participant.getDeath())
                    .assist(participant.getAssist())
                    .items(participantItemList)
                    .build());
        }

        MatchReadResponseDto matchReadResponseDto = MatchReadResponseDto.builder()
                .gameCreation(match.getGameCreation())
                .gameDuration(match.getGameDuration())
                .participants(participantDtoList)
                .build();

        return matchReadResponseDto;
    }

    /**
     * 유저 정보를 삽입하는 메소드
     */
    private void insertAccount(AccountDto account) {
        if (account == null) {  // 해당 유저 정보가 삽입되지 않았을 경우
            throw new RecordException(ErrorMessage.RIOT_API_FAILED);
        }
        if (account.puuid() == null || account.puuid().isBlank()
                || account.gameName() == null || account.gameName().isBlank()
                || account.tagLine() == null || account.tagLine().isBlank()) {  // 해당 유저 정보가 하나라도 삽입되지 않았을 경우
            throw new RecordException(ErrorMessage.RIOT_API_FAILED);
        }

        accountDao.insert(account.puuid(), account.gameName(), account.tagLine());
    }

    /**
     * 게임 정보를 삽입하는 메소드
     */
    private void insertMatch(MatchDto match) {
        if (match == null) {  // 매치 정보가 삽입되지 않을 경우
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        Date gameCreation = new Date(match.info().gameCreation());
        SimpleDateFormat gameCreationFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        matchDao.insert(match.metadata().matchId(), gameCreationFormat.format(gameCreation), match.info().gameDuration());

        for (ParticipantDto participant : match.info().participants()) {
            if (accountDao.countByPuuid(participant.puuid()) != 1) {  // 해당 유저의 PUUID가 저장되어있지 않은 경우
                insertAccount(AccountDto.builder()
                        .puuid(participant.puuid()).gameName(participant.riotIdGameName()).tagLine(participant.riotIdTagline())
                        .build());  // PUUID를 DB에 저장
            }

            matchDao.insertParticipant(ParticipantVo.builder()
                    .matchId(match.metadata().matchId())
                    .puuid(participant.puuid())
                    .champId(participant.championId())
                    .champLevel(participant.champLevel())
                    .kill(participant.kills())
                    .death(participant.deaths())
                    .assist(participant.assists())
                    .build());

            int[] items = new int[]{participant.item0(), participant.item1(), participant.item2(), participant.item3(), participant.item4(), participant.item5(), participant.item6()};

            for (int i = 0; i <= 6; i++) {
                matchDao.insertParticipantItem(ParticipantItemVo.builder()
                        .matchId(match.metadata().matchId())
                        .puuid(participant.puuid())
                        .itemOrder(i)
                        .itemId(items[i]).build());
            }
        }
    }
}
