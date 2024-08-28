package com.dkslgg.record.model.vo;

import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
public class BaseVo {
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public BaseVo(Timestamp createdAt, Timestamp updatedAt) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
