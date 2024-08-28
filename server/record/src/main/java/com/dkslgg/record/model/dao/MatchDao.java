package com.dkslgg.record.model.dao;

import com.dkslgg.record.model.vo.MatchVo;
import com.dkslgg.record.model.vo.ParticipantItemVo;
import com.dkslgg.record.model.vo.ParticipantVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MatchDao {
    List<MatchVo> selectMatch(List<String> idList) throws DataAccessException;
    void insertMatch(MatchVo matchVo) throws DataAccessException;
    void insertParticipantList(List<ParticipantVo> participantList) throws DataAccessException;
    void insertParticipantItemList(List<ParticipantItemVo> participantItemList) throws DataAccessException;

}
