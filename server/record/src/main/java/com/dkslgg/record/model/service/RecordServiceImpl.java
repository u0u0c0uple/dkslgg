package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dao.AccountDao;
import com.dkslgg.record.model.dao.MatchDao;
import com.dkslgg.record.model.dto.api.AccountDto;
import com.dkslgg.record.model.dto.api.MatchDto;
import com.dkslgg.record.model.dto.api.ParticipantDto;
import com.dkslgg.record.model.dto.command.ReadAccountCommandDto;
import com.dkslgg.record.model.dto.response.AccountResponseDto;
import com.dkslgg.record.model.dto.response.MatchResponseDto;
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
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecordServiceImpl implements RecordService {

    private final RiotApiUtil riotApiUtil;
    private final AccountDao accountDao;
    private final MatchDao matchDao;

    /**
     * 닉네임을 통해 라이엇 회원 정보를 조회하는 메소드
     * riotId 형식: {게임이름}#{태그}
     */
    @Override
    @Transactional(rollbackFor = RecordException.class)
    public AccountResponseDto readAccount(ReadAccountCommandDto readAccountCommandDto) {
        String[] idSplit = readAccountCommandDto.riotId().split("#");
        if (idSplit.length != 2) {  // 게임 닉네임과 태그 이름이 정상적으로 삽입되지 않았을 경우
            log.error("RecordService.readPuuidByRiotId id 분할 안 됨.");
            throw new RecordException(ErrorMessage.RIOT_ID_NOT_FOUND);
        }

        /* 게임 닉네임과 태그 이름 분리 */
        String gameName = riotApiUtil.formatRiotId(idSplit[0]);
        String tagLine = riotApiUtil.formatRiotId(idSplit[1]);// 두글자 닉네임 한 칸 띄우기

        AccountVo accountVo = accountDao.selectAccount(gameName, tagLine).orElse(null);

        if (accountVo == null) { //조회되지 않았을 때
            AccountDto accountDto = riotApiUtil.requestAccountByRiotId(gameName, tagLine);
            if (accountDto == null) {  // 해당 유저 정보가 삽입되지 않았을 경우
                log.error("해당 회원 API 조회 실패 : {}#{}", gameName, tagLine);
                throw new RecordException(ErrorMessage.RIOT_API_FAILED);
            }
            accountVo = new AccountVo(accountDto.puuid(), accountDto.gameName(), accountDto.tagLine());
            accountDao.insertAccount(accountVo);
        }

        return AccountResponseDto.from(accountVo);
    }

    /**
     * 최대 10개의 최근 게임 정보를 가져오는 메소드
     */
    @Override
    @Transactional(rollbackFor = RecordException.class)
    public List<MatchResponseDto> readMatchList(String puuid, int index) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        List<String> idList = riotApiUtil.requestMatchListByPuuid(puuid, index);
        log.info("id List: {}", idList);
        List<MatchVo> matchVoList = matchDao.selectMatch(idList);
        List<MatchResponseDto> matchResponseDtoList = new ArrayList<>();
        Set<String> existMatchIdList = new HashSet<>();
        for (MatchVo matchVo : matchVoList) {
            existMatchIdList.add(matchVo.getId());
        }
        log.info("exist id List: {}", existMatchIdList);

        MatchVo matchVo;
        ParticipantVo participantVo;
        if (existMatchIdList.size() < idList.size()) { //모든 게임 정보가 불러와지지 않았을 경우
            for (String id : idList) {
                if (!existMatchIdList.contains(id)) {//해당 게임 정보가 DB에 존재하지 않을 경우
                    MatchDto matchDto = riotApiUtil.requestMatchByMatchId(id);
                    if (matchDto == null || matchDto.info() == null || matchDto.metadata() == null) continue;

                    /* 매치 정보 삽입 */
                    Date creation = new Date(matchDto.info().gameCreation());
                    matchVo = new MatchVo(matchDto.metadata().matchId(), dateFormat.format(creation), (int) matchDto.info().gameDuration(), null);
                    matchDao.insertMatch(matchVo); //매치 정보 삽입

                    /* 각 참여자 정보 삽입 */
                    List<String> participantPuuidList = new ArrayList<>();
                    for (ParticipantDto participant : matchDto.info().participants()) { //참여자 PUUID 뽑기
                        participantPuuidList.add(participant.puuid());
                    }
                    Set<String> existPuuidSet = accountDao.existAccount(participantPuuidList); //DB에 존재하는 참여자 계정 정보 찾기

                    List<ParticipantVo> participantVoList = new ArrayList<>(); //DB에 저장할 참여자 리스트
                    List<ParticipantItemVo> participantItemVoList = new ArrayList<>(); //DB에 저장할 참여자 아이템 리스트
                    for (ParticipantDto participant : matchDto.info().participants()) {
                        AccountVo accountVo = new AccountVo(participant.puuid(), participant.riotIdGameName(), participant.riotIdTagline());
                        if (!existPuuidSet.contains(participant.puuid())) { //DB에 해당 참여자의 계정 정보가 저장되어있지 않다면
                            accountDao.insertAccount(accountVo); //계정 정보 저장
                        }
                        participantVo = ParticipantVo.builder()
                                .matchId(id)
                                .puuid(participant.puuid())
                                .champId(participant.championId())
                                .champLevel(participant.champLevel())
                                .kill(participant.kills())
                                .death(participant.deaths())
                                .assist(participant.assists())
                                .teamId(participant.teamId())
                                .account(accountVo)
                                .build();
                        participantItemVoList.clear();
                        int[] items = new int[]{participant.item0(), participant.item1(), participant.item2(), participant.item3(), participant.item4(), participant.item5(), participant.item6()};
                        for (int i = 0; i <= 6; i++) {
                            participantItemVoList.add(new ParticipantItemVo(id, participant.puuid(), i, items[i]));
                        }
                        participantVo = participantVo.toBuilder().itemList(participantItemVoList).build();
                        participantVoList.add(participantVo);
                    }
                    matchDao.insertParticipantList(participantVoList); //참여자 정보 한번에 저장 (foreach)
                    matchDao.insertParticipantItemList(participantItemVoList); //참여자 아이템 정보 한번에 저장 (foreach)
                    matchVo = matchVo.toBuilder().participantList(participantVoList).build();
                    matchVoList.add(matchVo);
                }
            }
        }
        matchVoList.sort((o1, o2) -> o2.getCreation().compareTo(o1.getCreation()));
        for (MatchVo match : matchVoList) {
            matchResponseDtoList.add(MatchResponseDto.from(match));
        }

        return matchResponseDtoList;
    }
}
