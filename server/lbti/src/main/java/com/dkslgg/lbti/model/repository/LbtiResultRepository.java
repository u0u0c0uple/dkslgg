package com.dkslgg.lbti.model.repository;

import com.dkslgg.lbti.model.entity.LbtiResult;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LbtiResultRepository extends JpaRepository<LbtiResult, String> {
    @Override
    Optional<LbtiResult> findById(String id) throws DataAccessException;
}
