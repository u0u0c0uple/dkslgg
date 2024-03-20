package com.dkslgg.record.util;

import com.dkslgg.record.model.dto.api.MatchDto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
public class RiotApiUtilTest {
    @Autowired
    private RiotApiUtil riotApiUtil;

    @Test
    @Transactional
    @DisplayName("PUUID를 통해 게임 ID 리스트 조회")
    public void requestMatchListByPuuid() {
        // Given
        String puuid = "bm1Qsq2s55EjroxetG56685iGGbDlfnXxHZO1NgrQBsHej_80OaGRSgnhbcI2Jq_0XX4F2Yy5Ek3og";

        List<String> matchList = riotApiUtil.requestMatchListByPuuid(puuid, "");
        Assertions.assertFalse(matchList.isEmpty());
    }

    @Test
    @Transactional
    @DisplayName("게임 ID를 통해 게임 정보 조회")
    public void requestMatchByMatchId() {
        // Given
        String matchId = "KR_6994089120";

        MatchDto matchDto = riotApiUtil.requestMatchByMatchId(matchId);
        Assertions.assertNotNull(matchDto);
    }


}
