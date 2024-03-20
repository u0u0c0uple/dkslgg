package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;

@Getter
@Slf4j
public class AccountVo extends BaseVo {
    private final String puuid;
    private final String gameName;
    private final String tagLine;

    @Builder
    public AccountVo(Timestamp createdAt, Timestamp updatedAt, String puuid, String gameName, String tagLine) {
        super(createdAt, updatedAt);

        if (puuid == null || puuid.length() != 78) {
            log.error("AccountVo puuid 유효하지 않음.");
            throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
        }
        if (gameName == null || gameName.length() < 2 || 16 < gameName.length()) {
            log.error("AccountVo gameName 유효하지 않음.");
            throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
        }
        if (tagLine == null || tagLine.length() < 3 || 5 < tagLine.length()) {
            log.error("AccountVo tagLine 유효하지 않음.");
            throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
        }

        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
    }
}
