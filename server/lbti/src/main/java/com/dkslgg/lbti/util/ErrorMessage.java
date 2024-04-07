package com.dkslgg.lbti.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@Getter
@RequiredArgsConstructor
public enum ErrorMessage {
    RESULT_NOT_FOUND(BAD_REQUEST, "LBTI 결과를 찾을 수 없습니다."),
    QUESTION_INVALID(INTERNAL_SERVER_ERROR, "LBTI 문항이 유효하지 않습니다."),
    RESULT_INVALID(INTERNAL_SERVER_ERROR, "LBTI 결과가 유효하지 않습니다.");

    private final HttpStatus status;
    private final String message;
}