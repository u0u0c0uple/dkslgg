package com.dkslgg.lbti.model.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class LbtiAnswer {
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
