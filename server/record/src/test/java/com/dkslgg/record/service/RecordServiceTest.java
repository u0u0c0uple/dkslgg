package com.dkslgg.record.service;

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
    public void readPuuidByRiotId() {
        // Given
        //String gameName = "뇽 뇽#야 니";
        String gameName = "야 니#뇽 뇽";

        String puuid = recordService.readPuuidByRiotId(gameName);

        Assertions.assertNotNull(puuid);
    }
}
