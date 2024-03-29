package com.dkslgg.lbti.model.service;

import com.dkslgg.lbti.model.dto.response.LbtiAnswerReadResponseDto;
import com.dkslgg.lbti.model.dto.response.LbtiQuestionReadResponseDto;
import com.dkslgg.lbti.model.entity.LbtiAnswer;
import com.dkslgg.lbti.model.entity.LbtiQuestion;
import com.dkslgg.lbti.model.repository.LbtiQuestionRepository;
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

    @Override
    @Transactional(rollbackFor = LbtiException.class)
    public List<LbtiQuestionReadResponseDto> readLbtiQuestionList() {
        List<LbtiQuestion> lbtiQuestionList = lbtiQuestionRepository.findAll();
        List<LbtiQuestionReadResponseDto> lbtiQuestionDtoList = new ArrayList<>();
        for (LbtiQuestion lbtiQuestion : lbtiQuestionList) {
            if (lbtiQuestion.getId() <= 0) {
                log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Id 유효하지 않음");
                throw new LbtiException(ErrorMessage.QUESTION_INVALID);
            }
            if (lbtiQuestion.getContent() == null || lbtiQuestion.getContent().isBlank()) {
                log.error("LbtiServiceImpl.readLbtiQuestionByQuestionId() Content 유효하지 않음");
                throw new LbtiException(ErrorMessage.QUESTION_INVALID);
            }

            List<LbtiAnswerReadResponseDto> lbtiAnswerDtoList = new ArrayList<>();
            for (LbtiAnswer lbtiAnswer : lbtiQuestion.getLbtiAnswerList()) {
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
                        .build());
            }

            lbtiQuestionDtoList.add(LbtiQuestionReadResponseDto.builder()
                    .content(lbtiQuestion.getContent())
                    .answerList(lbtiAnswerDtoList)
                    .build());
        }

        return lbtiQuestionDtoList;
    }
}
