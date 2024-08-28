package com.dkslgg.lbti.model.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.io.Serializable;

@Entity
@Getter
public class LbtiAnswer implements Serializable {
    @Id
    int answerId;
    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id", nullable = false)
    LbtiQuestion question;
    @Column(nullable = false, columnDefinition = "TEXT COLLATE 'utf8mb4_general_ci'")
    String content;
    @Column(nullable = false, columnDefinition = "CHAR(1) COLLATE 'utf8mb4_general_ci'")
    char itemCode;
    @Column(nullable = false, columnDefinition = "TINYINT(1)")
    int score;

}
