package com.dkslgg.record.model.dao;

import com.dkslgg.record.model.vo.AccountVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AccountDao {
    String selectPuuidByGameNameAndTagLine(String gameName, String tagLine) throws DataAccessException;
    AccountVo selectByPuuid(String puuid) throws DataAccessException;
    int countByPuuid(String puuid) throws DataAccessException;
    void insert(String puuid, String gameName, String tagLine) throws DataAccessException;
}
