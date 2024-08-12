package com.dkslgg.record.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class RecordControllerTest {

    @Autowired
    RecordController recordController;

    @Test
    @Transactional
    public void readMatchList() {
        // Given
        String summonerId = "뇽 뇽#야 니";
        recordController.readMatchList(summonerId, "2024-08-11 12:48:16");
    }
}
