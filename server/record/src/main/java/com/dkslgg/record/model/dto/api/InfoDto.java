package com.dkslgg.record.model.dto.api;

import java.util.List;

public record InfoDto(
        long gameCreation,
        long gameDuration,
        long gameEndTimestamp,
        long gameId,
        String gameMode,
        String gameName,
        String gameType,
        String gameVersion,
        int mapId,
        List<ParticipantDto> participants,
        String platformId,
        int queueId,
        List<TeamDto> teams,
        String tournamentCode
) {
}
