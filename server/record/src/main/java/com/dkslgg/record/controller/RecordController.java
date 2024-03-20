package com.dkslgg.record.controller;

import com.dkslgg.record.model.dto.response.MatchReadResponseDto;
import com.dkslgg.record.model.service.RecordService;
import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("record")
@CrossOrigin
@Slf4j
public class RecordController {

    private final RecordService recordService;

    @GetMapping("/{riotId}")
    public ResponseEntity<?> readRecordListByRiotId(@PathVariable String riotId) {
        if(riotId.isBlank() || !riotId.matches(RegexPattern.riotId)) {
            throw new RecordException(ErrorMessage.RIOT_ID_NOT_FOUND);
        }

        log.info("Request Riot Id : {}", riotId);
        // 1. 라이엇 아이디를 통해 PUUID 찾기
        String puuid = recordService.readPuuidByRiotId(riotId);
        
        // 2. PUUID를 통한 최근 전적 10개 조회
        List<String> matchIdList = recordService.readMatchListByPuuid(puuid, "");

        // 3. 전적 ID를 통한 전적 정보 조회
        List<MatchReadResponseDto> matchList = new ArrayList<>();
        for (String matchId : matchIdList) {
            matchList.add(recordService.readMatchByMatchId(matchId));
        }

        return ResponseEntity.ok(matchList);
    }
}
