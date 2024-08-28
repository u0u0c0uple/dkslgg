package com.dkslgg.lbti.model.dto.response;

import com.dkslgg.lbti.model.entity.LbtiQuestion;
import com.dkslgg.lbti.util.ErrorMessage;
import com.dkslgg.lbti.util.LbtiException;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
public record LbtiQuestionResponseDto(
        String content,
        List<LbtiAnswerResponseDto> answerList
) {

    @Builder
    public LbtiQuestionResponseDto(String content, List<LbtiAnswerResponseDto> answerList) {
        if (content == null || content.isBlank()) {
            log.error("LbtiQuestionResponseDto Content 유효하지 않음");
            throw new LbtiException(ErrorMessage.QUESTION_INVALID);
        }
        if(answerList == null || answerList.isEmpty()) {
            log.error("LbtiQuestionResponseDto Answer List 유효하지 않음");
            throw new LbtiException(ErrorMessage.QUESTION_INVALID);
        }
        this.content = content;
        this.answerList = answerList;
    }
}
