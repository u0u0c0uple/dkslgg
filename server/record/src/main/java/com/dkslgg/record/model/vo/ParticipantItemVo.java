package com.dkslgg.record.model.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
@NoArgsConstructor
@ToString
public class ParticipantItemVo {
    private int id;
    private String matchId;
    private String puuid;
    private int itemOrder;
    private int itemId;

    @Builder
    public ParticipantItemVo(String matchId, String puuid, int itemOrder, int itemId) {
        this.matchId = matchId;
        this.puuid = puuid;
        this.itemOrder = itemOrder;
        this.itemId = itemId;
    }
}
