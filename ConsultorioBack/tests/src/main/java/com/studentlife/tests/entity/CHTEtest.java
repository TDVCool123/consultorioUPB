package com.studentlife.tests.entity;


import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studentlife.tests.models.QuestionRequest;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="CHET_TEST")
public class CHTEtest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="NAME")
    private String name;

    @Column(name="DESCRIPTION")
    private String description;

    @Column(name = "USER_ID")
    private Long userId;
}
