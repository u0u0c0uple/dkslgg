package com.dkslgg.lbti.util;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class LbtiException extends RuntimeException {
    private final HttpStatus status;

    public LbtiException(ErrorMessage errorMessage) {
        super(errorMessage.getMessage());
        this.status = errorMessage.getStatus();
    }

    public LbtiException(HttpStatus status, String message) {
        super(message);
        this.status = status;
    }
}
