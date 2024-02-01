package com.studentlife.tests.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionRequest {

    private Long id;

    private String question;

    private boolean answer;

    private String testGroup;

    
}

