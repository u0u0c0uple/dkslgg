package com.dkslgg.record.model.dto.response;

import lombok.Builder;

import java.sql.Timestamp;
import java.util.List;

public record MatchReadResponseDto(
        String gameCreation,
        long gameDuration,
        List<ParticipantReadResponseDto> participants
) {
    @Builder
    public MatchReadResponseDto(String gameCreation, long gameDuration, List<ParticipantReadResponseDto> participants) {
        this.gameCreation = gameCreation;
        this.gameDuration = gameDuration;
        this.participants = participants;
    }
}
