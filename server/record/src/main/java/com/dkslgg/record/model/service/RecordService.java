package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dto.command.ReadAccountCommandDto;
import com.dkslgg.record.model.dto.response.MatchReadResponseDto;
import com.dkslgg.record.model.dto.response.AccountResponseDto;

import java.util.List;

public interface RecordService {
    AccountResponseDto readAccount(ReadAccountCommandDto readAccountCommandDto);
    List<String> readMatchListByPuuid(String puuid, String startTime);
    MatchReadResponseDto readMatchByMatchId(String matchId);
}
