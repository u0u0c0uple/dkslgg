package com.dkslgg.record.model.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
public class ParticipantItemVo {
    private final String matchId;
    private final String puuid;
    private final int itemOrder;
    private final int itemId;

    @Builder
    public ParticipantItemVo(String matchId, String puuid, int itemOrder, int itemId) {
        this.matchId = matchId;
        this.puuid = puuid;
        this.itemOrder = itemOrder;
        this.itemId = itemId;
    }
}
