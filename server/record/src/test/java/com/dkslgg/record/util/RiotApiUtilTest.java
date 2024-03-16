package com.dkslgg.record.util;

import com.dkslgg.record.model.dto.MatchDto;
import org.junit.jupiter.api.Assertions;
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
    public void getMatchListByPuuid() {
        // Given
        String puuid = "bm1Qsq2s55EjroxetG56685iGGbDlfnXxHZO1NgrQBsHej_80OaGRSgnhbcI2Jq_0XX4F2Yy5Ek3og";

        List<String> matchList = riotApiUtil.getMatchListByPuuid(puuid);
        Assertions.assertFalse(matchList.isEmpty());
    }

    @Test
    @Transactional
    public void getMatchInfoByMatchId() {
        // Given
        String matchId = "KR_6987866957";
        MatchDto matchDto = riotApiUtil.getMatchInfoByMatchId(matchId);
        Assertions.assertNotNull(matchDto);
    }
}
