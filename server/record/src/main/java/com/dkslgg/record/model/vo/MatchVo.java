package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Slf4j
@NoArgsConstructor
@ToString
public class MatchVo extends BaseVo {
    private String id;
    private String creation;
    private long duration;
    private List<ParticipantVo> participantList;

    @Builder(toBuilder = true)
    public MatchVo(String id, String creation, long duration, List<ParticipantVo> participantList) {
        if (id == null || !id.matches(RegexPattern.matchId)) {
            log.error("MatchVo의 MatchId 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (creation == null) {
            log.error("MatchVo의 creation 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (duration < 0) {
            log.error("MatchVo의 duration 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        this.id = id;
        this.creation = creation;
        this.duration = duration;
        this.participantList = participantList;
    }
}
