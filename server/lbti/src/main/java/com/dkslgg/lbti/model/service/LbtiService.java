package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiQuestionResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiResultResponseDto;

import java.util.List;

public interface LbtiService {
    List<LbtiQuestionResponseDto> readLbtiQuestionList();
    LbtiResultResponseDto readLbtiResult(String lbtiResult);
}
