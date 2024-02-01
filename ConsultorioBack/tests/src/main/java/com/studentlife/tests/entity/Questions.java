package com.studentlife.tests.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="QUESTIONS")
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="QUESTION")
    private String question;

    @Column(name="ANSWER")
    private boolean answer;

    @Column(name="TEST_GROUP")
    private String testGroup;

    @ManyToOne
    @JoinColumn(name = "TEST_ID", nullable = false)
    private CHTEtest test;
}
