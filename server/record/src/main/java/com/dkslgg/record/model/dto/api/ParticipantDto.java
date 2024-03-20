package com.dkslgg.record.model.dto.api;

import lombok.Builder;

public record ParticipantDto(
        String matchId,
        String puuid,
        int championId,
        int champLevel,
        int kills,
        int deaths,
        int assists,
        int item0,
        int item1,
        int item2,
        int item3,
        int item4,
        int item5,
        int item6,
        int teamId,
        String teamPosition,
        boolean win,
        String riotIdGameName,
        String riotIdTagline
) {
    @Builder(toBuilder = true)
    public ParticipantDto(String matchId, String puuid, int championId, int champLevel, int kills, int deaths, int assists, int item0, int item1, int item2, int item3, int item4, int item5, int item6, int teamId, String teamPosition, boolean win, String riotIdGameName, String riotIdTagline) {
        this.matchId = matchId;
        this.puuid = puuid;
        this.championId = championId;
        this.champLevel = champLevel;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.item0 = item0;
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.item4 = item4;
        this.item5 = item5;
        this.item6 = item6;
        this.teamId = teamId;
        this.teamPosition = teamPosition;
        this.win = win;
        this.riotIdGameName = riotIdGameName;
        this.riotIdTagline = riotIdTagline;
    }
}
