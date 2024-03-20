package com.dkslgg.record.model.dto.api;

import lombok.Builder;

public record AccountDto(
        String puuid,
        String gameName,
        String tagLine
) {
    @Builder
    public AccountDto(String puuid, String gameName, String tagLine) {
        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
    }
}
