package com.dkslgg.record.model.dto.response;

import com.dkslgg.record.model.vo.MatchVo;
import com.dkslgg.record.model.vo.ParticipantVo;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

public record MatchResponseDto(
        String matchId,
        String creation,
        long duration,
        List<ParticipantResponseDto> participants
) {
    public static MatchResponseDto from(MatchVo matchVo) {
        List<ParticipantResponseDto> participants = new ArrayList<>();
        for(ParticipantVo participantVo : matchVo.getParticipantList()) {
            participants.add(ParticipantResponseDto.from(participantVo));
        }
        return new MatchResponseDto(matchVo.getId(), matchVo.getCreation(), matchVo.getDuration(), participants);
    }
    @Builder
    public MatchResponseDto(String matchId, String creation, long duration, List<ParticipantResponseDto> participants) {
        this.matchId = matchId;
        this.creation = creation;
        this.duration = duration;
        this.participants = participants;
    }
}
