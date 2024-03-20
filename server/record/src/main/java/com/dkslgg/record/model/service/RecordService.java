package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dto.response.MatchReadResponseDto;

import java.util.List;

public interface RecordService {
    String readPuuidByRiotId(String riotId);
    List<String> readMatchListByPuuid(String puuid, String startTime);
    MatchReadResponseDto readMatchByMatchId(String matchId);
}
