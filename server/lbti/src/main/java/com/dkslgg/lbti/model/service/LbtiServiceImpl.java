package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiAnswerResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiQuestionResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiResultResponseDto;
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

    /**
     * LBTI 문항 리스트를 조회하는 메소드
     */
    @Override
    @Transactional(rollbackFor = LbtiException.class)
    public List<LbtiQuestionResponseDto> readLbtiQuestionList() {
        // LBTI 문항 조회
        List<LbtiQuestion> lbtiQuestionList = lbtiQuestionRepository.findAll();
        List<LbtiQuestionResponseDto> lbtiQuestionDtoList = new ArrayList<>();
        for (LbtiQuestion lbtiQuestion : lbtiQuestionList) {  // Question 순회
            if (lbtiQuestion.getId() <= 0 || lbtiQuestion.getContent() == null || lbtiQuestion.getContent().isBlank()) {
                log.error("Lbti 문항 ID 혹은 내용이 유효하지 않음 : LbtiQuestion\\{id={}, content={}\\}", lbtiQuestion.getId(), lbtiQuestion.getContent());
                throw new LbtiException(ErrorMessage.QUESTION_INVALID);
            }

            List<LbtiAnswerResponseDto> lbtiAnswerDtoList = new ArrayList<>();
            for (LbtiAnswer lbtiAnswer : lbtiQuestion.getLbtiAnswerList()) {  // 각 문항에 대한 Answer 순회
                if (lbtiAnswer.getContent() == null || lbtiAnswer.getContent().isBlank() || lbtiAnswer.getScore() <= 0) {
                    log.error("Lbti 문항 응답 유효하지 않음 : LbtiAnswer\\{content={}, score={}\\}", lbtiAnswer.getContent(), lbtiAnswer.getScore());
                    throw new LbtiException(ErrorMessage.QUESTION_INVALID);
                }
                lbtiAnswerDtoList.add(LbtiAnswerResponseDto.builder()
                        .content(lbtiAnswer.getContent())
                        .itemCode(lbtiAnswer.getItemCode())
                        .score(lbtiAnswer.getScore())
                        .build());  // Answer 삽입
            }

            lbtiQuestionDtoList.add(LbtiQuestionResponseDto.builder()
                    .content(lbtiQuestion.getContent())
                    .answerList(lbtiAnswerDtoList)
                    .build());  // Question 삽입
        }

        return lbtiQuestionDtoList;
    }

    /**
     * LBTI 응답에 따른 결과를 반환하는 메소드
     */
    @Override
    public LbtiResultResponseDto readLbtiResult(String lbtiResultStr) {
        LbtiResult lbtiResult = lbtiResultRepository.findById(lbtiResultStr).orElseThrow(() -> {
            log.error("요청받은 LBTI 문자열 유효하지 않음 : {}", lbtiResultStr);
            return new LbtiException(ErrorMessage.RESULT_NOT_FOUND);
        });

        return LbtiResultResponseDto.builder()
                .code(lbtiResult.getCode())
                .title(lbtiResult.getTitle())
                .content(lbtiResult.getContent())
                .champCode(lbtiResult.getChampCode())
                .build();
    }
}
