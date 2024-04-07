package com.dkslgg.lbti.controller;

import com.dkslgg.lbti.model.service.LbtiService;
import com.dkslgg.lbti.util.ErrorMessage;
import com.dkslgg.lbti.util.LbtiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lbti")
@RequiredArgsConstructor
@Slf4j
public class LbtiController {
    private final LbtiService lbtiService;
    @GetMapping("question")
    public ResponseEntity<?> readLbtiQuestionList() {
        return ResponseEntity.ok(lbtiService.readLbtiQuestionList());
    }
    @GetMapping("{lbtiResult}")
    public ResponseEntity<?> readLbtiResult(@PathVariable String lbtiResult) {
        if(lbtiResult == null || lbtiResult.length() != 4) {
            log.error("LbtiController.readLbtiResult() LBTI 결과 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_NOT_FOUND);
        }
        return ResponseEntity.ok(lbtiService.readLbtiResult(lbtiResult));
    }
}
