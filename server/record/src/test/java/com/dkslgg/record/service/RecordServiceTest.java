package com.dkslgg.record.service;

import com.dkslgg.record.model.dto.response.MatchReadResponseDto;
import com.dkslgg.record.model.service.RecordService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
public class RecordServiceTest {

    @Autowired
    RecordService recordService;

    @Test
    @Transactional
    public void readPuuidByRiotId() {
        // Given
        //String gameName = "뇽 뇽#야 니";
        String gameName = "야 니#뇽 뇽";

        String puuid = recordService.readPuuidByRiotId(gameName);

        Assertions.assertNotNull(puuid);
    }

    @Test
    @Transactional
    public void readMatchListByPuuid() {
        // Given
        String puuid = "bm1Qsq2s55EjroxetG56685iGGbDlfnXxHZO1NgrQBsHej_80OaGRSgnhbcI2Jq_0XX4F2Yy5Ek3og";

        List<String> matchList = recordService.readMatchListByPuuid(puuid, "");

        Assertions.assertNotNull(matchList);
        Assertions.assertFalse(matchList.isEmpty());
    }

    @Test
    @Transactional
    public void readMatchByMatchId() {
        // Given
        String matchId = "KR_6994089120";

        MatchReadResponseDto matchInfo = recordService.readMatchByMatchId(matchId);

        Assertions.assertNotNull(matchInfo);
    }
}
