package com.dkslgg.lbti.controller;

import com.dkslgg.lbti.model.service.LbtiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lbti")
@RequiredArgsConstructor
public class LbtiController {
    private final LbtiService lbtiService;
    @GetMapping("question")
    public ResponseEntity<?> readLbtiQuestionList() {
        return ResponseEntity.ok(lbtiService.readLbtiQuestionList());
    }
}
