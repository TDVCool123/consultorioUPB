package com.studentlife.tests.service;


import java.util.List;

import com.studentlife.tests.entity.Questions;
import com.studentlife.tests.entity.Results;
import com.studentlife.tests.models.CHTEanswers;
import com.studentlife.tests.models.CHTEtestRequest;

public interface CHTEtestService {
    public String createTest(CHTEtestRequest test);

    public Questions getQuestion(long idQuestion);

    
    public CHTEtestRequest getTest(long idTest);
    public List<Results> getResults(long idTest);
    public String deleteTest(long idTest);
    /*
    public List<Questions> getTestQuestionsById(Long id);
    
    
    */
    public List<Results> setResponses(long idTest,long idQuestion, CHTEanswers answers);  
}
