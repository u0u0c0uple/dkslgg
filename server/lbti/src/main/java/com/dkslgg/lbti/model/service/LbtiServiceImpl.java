package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiAnswerReadResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiQuestionReadResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiResultReadResponseDto;
import com.dkslgg.lbti.model.entity.LbtiAnswer;
import com.dkslgg.lbti.model.entity.LbtiQuestion;
import com.dkslgg.lbti.model.entity.LbtiResult;
import com.dkslgg.lbti.model.repository.LbtiQuestionRepository;
import com.dkslgg.lbti.model.repository.LbtiResultRepository;
import com.dkslgg.lbti.util.ErrorMessage;
import com.dkslgg.lbti.util.LbtiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class LbtiServiceImpl implements LbtiService {
    private final LbtiQuestionRepository lbtiQuestionRepository;
    private final LbtiResultRepository lbtiResultRepository;

    @Override
    @Transactional(rollbackFor = LbtiException.class)
    public List<LbtiQuestionReadResponseDto> readLbtiQuestionList() {
        // LBTI 문항 조회
        List<LbtiQuestion> lbtiQuestionList = lbtiQuestionRepository.findAll();
        List<LbtiQuestionReadResponseDto> lbtiQuestionDtoList = new ArrayList<>();
        for (LbtiQuestion lbtiQuestion : lbtiQuestionList) {  // Question 순회
            if (lbtiQuestion.getId() <= 0) {
                log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Id 유효하지 않음");
                throw new LbtiException(ErrorMessage.QUESTION_INVALID);
            }
            if (lbtiQuestion.getContent() == null || lbtiQuestion.getContent().isBlank()) {
                log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Content 유효하지 않음");
                throw new LbtiException(ErrorMessage.QUESTION_INVALID);
            }

            List<LbtiAnswerReadResponseDto> lbtiAnswerDtoList = new ArrayList<>();
            for (LbtiAnswer lbtiAnswer : lbtiQuestion.getLbtiAnswerList()) {  // Answer 순회
                if (lbtiQuestion.getContent() == null || lbtiQuestion.getContent().isBlank()) {
                    log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Answer Content 유효하지 않음");
                    throw new LbtiException(ErrorMessage.QUESTION_INVALID);
                }
                if (lbtiAnswer.getScore() <= 0) {
                    log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Answer Score 유효하지 않음.");
                    throw new LbtiException(ErrorMessage.QUESTION_INVALID);
                }
                lbtiAnswerDtoList.add(LbtiAnswerReadResponseDto.builder()
                        .content(lbtiAnswer.getContent())
                        .itemCode(lbtiAnswer.getItemCode())
                        .score(lbtiAnswer.getScore())
                        .build());  // Answer 삽입
            }

            lbtiQuestionDtoList.add(LbtiQuestionReadResponseDto.builder()
                    .content(lbtiQuestion.getContent())
                    .answerList(lbtiAnswerDtoList)
                    .build());  // Question 삽입
        }

        return lbtiQuestionDtoList;
    }

    @Override
    public LbtiResultReadResponseDto readLbtiResult(String lbtiResultStr) {
        LbtiResult lbtiResult = lbtiResultRepository.findById(lbtiResultStr).orElseThrow(() -> {
            log.error("LbtiServiceImpl.readLbtiResult() LBTI 문자열 유효하지 않음");
            throw new LbtiException(ErrorMessage.RESULT_NOT_FOUND);
        });

        return LbtiResultReadResponseDto.builder()
                .code(lbtiResult.getCode())
                .title(lbtiResult.getTitle())
                .content(lbtiResult.getContent())
                .champCode(lbtiResult.getChampCode())
                .build();
    }
}
