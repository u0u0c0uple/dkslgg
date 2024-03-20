package com.dkslgg.record.model.vo;

import java.sql.Timestamp;

public class BaseVo {
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public BaseVo(Timestamp createdAt, Timestamp updatedAt) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
