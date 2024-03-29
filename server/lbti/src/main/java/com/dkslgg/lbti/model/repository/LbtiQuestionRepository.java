package com.dkslgg.lbti.model.repository;

import com.dkslgg.lbti.model.entity.LbtiQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LbtiQuestionRepository extends JpaRepository<LbtiQuestion, Integer> {
    @Override
    List<LbtiQuestion> findAll();
}
