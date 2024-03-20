package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;

@Getter
@Slf4j
@ToString
public class MatchVo extends BaseVo {
    private final String matchId;
    private final String gameCreation;
    private final long gameDuration;

    @Builder
    public MatchVo(String matchId, String gameCreation, int gameDuration, Timestamp createdAt, Timestamp updatedAt) {
        super(createdAt, updatedAt);

        if (matchId == null || !matchId.matches(RegexPattern.matchId)) {
            log.error("MatchVo의 MatchId 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (gameCreation == null) {
            log.error("MatchVo의 gameCreation 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (gameDuration < 0) {
            log.error("MatchVo의 gameDuration 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        this.matchId = matchId;
        this.gameCreation = gameCreation;
        this.gameDuration = gameDuration;
    }
}
