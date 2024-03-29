package com.dkslgg.lbti.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;

import java.util.List;

@Entity
@Getter
public class LbtiQuestion extends Base {
    @Id
    private int id;
    @Column(nullable = false, columnDefinition = "TEXT COLLATE 'utf8mb4_general_ci'")
    private String content;
    @OneToMany(mappedBy = "question")
    private List<LbtiAnswer> lbtiAnswerList;
}
