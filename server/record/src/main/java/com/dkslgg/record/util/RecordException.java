package com.dkslgg.record.util;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class RecordException extends RuntimeException {
    private final HttpStatus status;

    public RecordException(ErrorMessage errorMessage) {
        super(errorMessage.getMessage());
        this.status = errorMessage.getStatus();
    }

    public RecordException(HttpStatus status, String message) {
        super(message);
        this.status = status;
    }
}
