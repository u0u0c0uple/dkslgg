package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiQuestionReadResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiResultReadResponseDto;

import java.util.List;

public interface LbtiService {
    List<LbtiQuestionReadResponseDto> readLbtiQuestionList();
    LbtiResultReadResponseDto readLbtiResult(String lbtiResult);
}
