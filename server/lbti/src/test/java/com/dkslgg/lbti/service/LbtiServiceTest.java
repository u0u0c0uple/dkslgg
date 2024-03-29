package com.dkslgg.lbti.service;

import com.dkslgg.lbti.model.dto.response.LbtiQuestionReadResponseDto;
import com.dkslgg.lbti.model.service.LbtiService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class LbtiServiceTest {
    @Autowired
    private LbtiService lbtiService;

    @Test
    @DisplayName("LBTI 문항 조회하는 서비스")
    void readLbtiQuestion() {
        List<LbtiQuestionReadResponseDto> lbtiQuestionList = lbtiService.readLbtiQuestionList();

        Assertions.assertNotNull(lbtiQuestionList);
        Assertions.assertFalse(lbtiQuestionList.isEmpty());
    }

}
