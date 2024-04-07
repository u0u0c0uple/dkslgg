package com.dkslgg.lbti.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import org.hibernate.annotations.Comment;

@Entity
@Getter
public class LbtiResult extends Base {
    @Id
    @Comment("LBTI 결과 코드")
    String code;
    @Column(nullable = false, columnDefinition = "VARCHAR(100) COLLATE 'utf8mb4_general_ci'")
    @Comment("LBTI 결과 제목")
    String title;
    @Column(nullable = false, columnDefinition = "TEXT COLLATE 'utf8mb4_general_ci'")
    @Comment("LBTI 결과 내용")
    String content;
    @Column(nullable = false, columnDefinition = "VARCHAR(20) COLLATE 'utf8mb4_general_ci'")
    @Comment("관련 챔피언 코드")
    String champCode;
}
