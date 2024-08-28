package com.dkslgg.record.model.service;

import com.dkslgg.record.model.dto.command.ReadAccountCommandDto;
import com.dkslgg.record.model.dto.response.AccountResponseDto;
import com.dkslgg.record.model.dto.response.MatchResponseDto;

import java.util.List;

public interface RecordService {
    AccountResponseDto readAccount(ReadAccountCommandDto readAccountCommandDto);
    List<MatchResponseDto> readMatchList(String puuid, int index);
}
