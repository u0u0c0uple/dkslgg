package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;

@Getter
@Slf4j
@NoArgsConstructor
@ToString
public class AccountVo extends BaseVo {
    private String puuid;
    private String gameName;
    private String tagLine;

    @Builder
    public AccountVo(String puuid, String gameName, String tagLine) {
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
