package com.dkslgg.record.model.dto.response;

import com.dkslgg.record.model.vo.AccountVo;

public record AccountResponseDto(
        String puuid,
        String gameName,
        String tagLine
) {
    public AccountResponseDto(String puuid, String gameName, String tagLine) {
        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
    }

    public static AccountResponseDto from(AccountVo accountVo) {
        return new AccountResponseDto(accountVo.getPuuid(), accountVo.getGameName(), accountVo.getTagLine());
    }
}
