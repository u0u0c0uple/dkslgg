package com.dkslgg.lbti.aop;

import com.dkslgg.lbti.model.dto.ErrorResponseDto;
import com.dkslgg.lbti.util.LbtiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestControllerAdvice
@Slf4j
public class ExceptionAdvice {

    @ExceptionHandler(DataAccessException.class)
    public ResponseEntity<?> handleException(DataAccessException e) {
        log.error("DataAccessException : {}", e.getMessage());
        return ResponseEntity.internalServerError()
                .body(new ErrorResponseDto(INTERNAL_SERVER_ERROR.value(), "서버 오류입니다. 상황이 지속되면 문의 게시판을 이용해 주세요."));
    }

    @ExceptionHandler(MissingRequestHeaderException.class)
    public ResponseEntity<?> handleException(MissingRequestHeaderException e) {
        log.error("MissingRequestHeaderException : {}", e.getMessage());
        return ResponseEntity.badRequest()
                .body(new ErrorResponseDto(BAD_REQUEST.value(), "서버 오류입니다. 상황이 지속되면 문의 게시판을 이용해 주세요."));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<?> handleException(MethodArgumentNotValidException e) {
        log.error("methodArgumentNotValidException : {}", e.getFieldErrors().get(0).getDefaultMessage());
        return ResponseEntity.badRequest()
                .body(new ErrorResponseDto(BAD_REQUEST.value(), e.getFieldErrors().get(0).getDefaultMessage()));
    }

    @ExceptionHandler(LbtiException.class)
    public ResponseEntity<?> handleException(LbtiException e) {
        log.error("RecordException : {}", e.getMessage());
        String message = (e.getStatus() == HttpStatus.INTERNAL_SERVER_ERROR) ? "서버 오류입니다. 상황이 지속되면 문의 게시판을 이용해 주세요." : e.getMessage();
        return ResponseEntity.status(e.getStatus())
                .body(new ErrorResponseDto(e.getStatus().value(), message));
    }

}