package com.studentlife.jwt.external.models;

import java.util.List;

import lombok.Data;

@Data
public class CHTEtestRequest{
    
    private long id;

    private String name;

    private String description;

    private List<QuestionRequest> questions;

    private List<ResultRequest> results;

}