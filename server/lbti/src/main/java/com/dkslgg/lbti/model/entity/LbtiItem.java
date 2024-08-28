package com.dkslgg.lbti.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

import java.io.Serializable;

@Entity
@Getter
public class LbtiItem implements Serializable {
    @Id
    @Column(nullable = false, columnDefinition = "CHAR(1) COLLATE 'utf8mb4_general_ci'")
    char code;
    @Column(nullable = false, columnDefinition = "VARCHAR(12) COLLATE 'utf8mb4_general_ci'")
    char title;
    @Column(name = "`desc`", nullable = false, columnDefinition = "VARCHAR(5) COLLATE 'utf8mb4_general_ci'")
    char desc;

}
