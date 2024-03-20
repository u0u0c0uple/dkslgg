package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
public class ParticipantVo {
    private final String matchId;
    private final String puuid;
    private final int champId;
    private final int champLevel;
    private final int kill;
    private final int death;
    private final int assist;

    @Builder
    public ParticipantVo(String matchId, String puuid, int champId, int champLevel, int kill, int death, int assist) {
        if (matchId == null || !matchId.matches(RegexPattern.matchId)) {
            log.error("ParticipantVo의 MatchId 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (puuid == null || puuid.length() != 78) {
            log.error("ParticipantVo의 PUUID 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(champId < 0) {
            log.error("ParticipantVo의 Champion ID 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(champLevel <= 0 || 18 < champLevel) {
            log.error("ParticipantVo의 Champion Level 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(kill < 0) {
            log.error("ParticipantVo의 kill 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(death < 0) {
            log.error("ParticipantVo의 death 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(assist < 0) {
            log.error("ParticipantVo의 assist 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        this.matchId = matchId;
        this.puuid = puuid;
        this.champId = champId;
        this.champLevel = champLevel;
        this.kill = kill;
        this.death = death;
        this.assist = assist;
    }
}
