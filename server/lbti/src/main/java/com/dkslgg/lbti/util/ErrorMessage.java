package com.dkslgg.lbti.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@RequiredArgsConstructor
public enum ErrorMessage {
    QUESTION_INVALID(INTERNAL_SERVER_ERROR, "LBTI 문항이 유효하지 않습니다.");

    private final HttpStatus status;
    private final String message;
}