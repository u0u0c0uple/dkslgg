package com.dkslgg.lbti.model.dto.response;

import com.dkslgg.lbti.util.ErrorMessage;
import com.dkslgg.lbti.util.LbtiException;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public record LbtiAnswerResponseDto(
    String content,
        char itemCode,
    int score
) {
    @Builder
    public LbtiAnswerResponseDto(String content, char itemCode, int score) {
        if(content == null || content.isBlank()) {
            log.error("LbtiAnswerResponseDto Content 유효하지 않음.");
            throw new LbtiException(ErrorMessage.QUESTION_INVALID);
        }
        if(score <= 0) {
            log.error("LbtiAnswerResponseDto Score 유효하지 않음.");
            throw new LbtiException(ErrorMessage.QUESTION_INVALID);
        }
        this.content = content;
        this.itemCode = itemCode;
        this.score = score;
    }
}
