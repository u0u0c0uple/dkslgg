package com.dkslgg.lbti.model.dto.response;

import com.dkslgg.lbti.util.ErrorMessage;
import com.dkslgg.lbti.util.LbtiException;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public record LbtiResultResponseDto(
        String code,
        String title,
        String content,
        String champCode
) {
    @Builder
    public LbtiResultResponseDto(String code, String title, String content, String champCode) {
        if(code == null || code.length() != 4) {
            log.error("LbtiResultResponseDto Code 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_INVALID);
        }
        if(title == null) {
            log.error("LbtiResultResponseDto Title 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_INVALID);
        }
        if(content == null) {
            log.error("LbtiResultResponseDto Content 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_INVALID);
        }
        if(champCode == null) {
            log.error("LbtiResultResponseDto Champion Code 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_INVALID);
        }
        this.code = code;
        this.title = title;
        this.content = content;
        this.champCode = champCode;
    }
}
