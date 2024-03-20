package com.dkslgg.record.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@RequiredArgsConstructor
public enum ErrorMessage {
    RIOT_API_FAILED(INTERNAL_SERVER_ERROR, "Riot API를 확인해 주세요."),
    MATCH_INVALID(INTERNAL_SERVER_ERROR, "매치가 유효하지 않습니다."),
    ACCOUNT_INVALID(INTERNAL_SERVER_ERROR, "유저가 유효하지 않습니다."),
    RIOT_ID_NOT_FOUND(BAD_REQUEST, "라이엇 아이디가 존재하지 않습니다.");

    private final HttpStatus status;
    private final String message;
}