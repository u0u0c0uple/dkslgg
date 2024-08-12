package com.dkslgg.record.service;

import com.dkslgg.record.model.dto.command.ReadAccountCommandDto;
import com.dkslgg.record.model.dto.response.AccountResponseDto;
import com.dkslgg.record.model.service.RecordService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class RecordServiceTest {

    @Autowired
    RecordService recordService;

    @Test
    @Transactional
    public void readAccount() {
        // Given
        ReadAccountCommandDto readAccountCommandDto = new ReadAccountCommandDto("Hide On Bush#KR1");

        AccountResponseDto accountResponseDto = recordService.readAccount(readAccountCommandDto);
        System.out.println(accountResponseDto);

        Assertions.assertNotNull(accountResponseDto);
    }

    @Test
//    @Transactional
    public void readMatchList() {
        // Given
        String puuid = "DzYiGmrRukur9I06w4CtiRelYmiSvmbj5k29ct7ZCGzTq-kZyo-Y4MISZITAEx2thfiUnijiLoOOrg";
        recordService.readMatchList(puuid, 0);
    }

//    @Test
//    @Transactional
//    public void readMatchListByPuuid() {
//        // Given
//        String puuid = "Y0nXfxu3SYhkaoYsu3nGO7FWBA80UmcfmXrFXRkLwyYQYzqpsI42gRLhxOWhibB8NUEMIFTmVe7kpQ";
//
//        List<String> matchList = recordService.readMatchListByPuuid(puuid, "");
//
//        Assertions.assertNotNull(matchList);
//        Assertions.assertFalse(matchList.isEmpty());
//    }
//
//    @Test
//    @Transactional
//    public void readMatchByMatchId() {
//        // Given
//        String matchId = "KR_6994089120";
//
//        MatchReadResponseDto matchInfo = recordService.readMatchByMatchId(matchId);
//
//        Assertions.assertNotNull(matchInfo);
//    }
}
