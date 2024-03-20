package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dao.AccountDao;
import com.dkslgg.record.model.dto.api.AccountDto;
import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RiotApiUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecordServiceImpl implements RecordService {

    private final RiotApiUtil riotApiUtil;
    private final AccountDao accountDao;

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
        log.info("{} 소환사의 puuid: {}", riotId, puuid);
        return puuid;
    }

    @Transactional(rollbackFor = RecordException.class)
    public void insertAccount(AccountDto account) {
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
}
