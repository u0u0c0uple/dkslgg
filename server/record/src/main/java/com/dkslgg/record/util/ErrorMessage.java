package com.dkslgg.record.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@RequiredArgsConstructor
public enum ErrorMessage {
    MATCH_INVALID(INTERNAL_SERVER_ERROR, "매치가 유효하지 않습니다."),
    SUMMONER_INVALID(INTERNAL_SERVER_ERROR, "소환사가 유효하지 않습니다.");

    private final HttpStatus status;
    private final String message;
}