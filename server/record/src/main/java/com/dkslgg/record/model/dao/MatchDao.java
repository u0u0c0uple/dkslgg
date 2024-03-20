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
    int countByMatchId(String matchId) throws DataAccessException;
    List<String> selectMatchIdByPuuid(String puuid) throws DataAccessException;
    MatchVo selectByMatchId(String matchId) throws DataAccessException;
    List<ParticipantVo> selectParticipantsByMatchId(String matchId) throws DataAccessException;
    List<Integer> selectParticipantsItemIdByMatchIdAndPuuid(String matchId, String puuid) throws DataAccessException;
    void insert(String matchId, String gameCreation, long gameDuration) throws DataAccessException;

    void insertParticipant(ParticipantVo participant) throws DataAccessException;
    void insertParticipantItem(ParticipantItemVo participantItemVo) throws DataAccessException;

}
