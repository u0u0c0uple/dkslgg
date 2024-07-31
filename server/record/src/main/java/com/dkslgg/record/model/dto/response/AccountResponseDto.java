package com.dkslgg.record.model.dto.response;

import com.dkslgg.record.model.vo.AccountVo;
import lombok.Builder;

public record AccountResponseDto(
        String puuid,
        String gameName,
        String tagLine
) {
    public static AccountResponseDto from(AccountVo accountVo) {
        return new AccountResponseDto(accountVo.getPuuid(), accountVo.getGameName(), accountVo.getTagLine());
    }

    public AccountResponseDto(String puuid, String gameName, String tagLine) {
        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
    }
}
