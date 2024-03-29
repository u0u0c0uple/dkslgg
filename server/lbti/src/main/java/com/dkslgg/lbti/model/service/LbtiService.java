package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiQuestionReadResponseDto;

import java.util.List;

public interface LbtiService {
    List<LbtiQuestionReadResponseDto> readLbtiQuestionList();
}
