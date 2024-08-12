package com.dkslgg.record.model.dao;

import com.dkslgg.record.model.vo.AccountVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Mapper
@Repository
public interface AccountDao {
    Optional<AccountVo> selectAccount(String gameName, String tagLine) throws DataAccessException;
    Set<String> existAccount(List<String> puuidList) throws DataAccessException;
    void insertAccount(AccountVo accountVo) throws DataAccessException;
}
