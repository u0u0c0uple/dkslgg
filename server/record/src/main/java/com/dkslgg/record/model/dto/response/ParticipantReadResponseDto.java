package com.dkslgg.record.model.dto.response;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
public record ParticipantReadResponseDto(
        String gameName,
        String tagLine,
        int champId,
        int champLevel,
        int kill,
        int death,
        int assist,
        List<Integer> items
) {
    @Builder
    public ParticipantReadResponseDto(String gameName, String tagLine, int champId, int champLevel, int kill, int death, int assist, List<Integer> items) {

        if (gameName == null || gameName.length() < 2 || 16 < gameName.length()) {
            log.error("ParticipantReadResponseDto의 Game Name 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if (tagLine == null || tagLine.length() < 3 || 5 < tagLine.length()) {
            log.error("ParticipantReadResponseDto의 Tagline 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(champId < 0) {
            log.error("ParticipantReadResponseDto의 Champion ID 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(champLevel <= 0 || 18 < champLevel) {
            log.error("ParticipantReadResponseDto의 Champion Level 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(kill < 0) {
            log.error("ParticipantReadResponseDto의 kill 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(death < 0) {
            log.error("ParticipantReadResponseDto의 death 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(assist < 0) {
            log.error("ParticipantReadResponseDto의 assist 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        if(items == null || items.size() != 7) {
            log.error("ParticipantReadResponseDto의 items 유효하지 않음.");
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }
        this.gameName = gameName;
        this.tagLine = tagLine;
        this.champId = champId;
        this.champLevel = champLevel;
        this.kill = kill;
        this.death = death;
        this.assist = assist;
        this.items = items;
    }
}
