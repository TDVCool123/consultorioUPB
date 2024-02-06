package com.studentlife.tests.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentlife.tests.entity.CHTEtest;
import com.studentlife.tests.entity.Questions;
import com.studentlife.tests.entity.Results;
import com.studentlife.tests.models.CHTEanswers;
import com.studentlife.tests.models.CHTEtestRequest;
import com.studentlife.tests.repository.QuestionRepository;
import com.studentlife.tests.repository.ResultRepository;
import com.studentlife.tests.repository.TestRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class CHTEtestServiceImpl implements CHTEtestService{

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ResultRepository resultRepository;

    
    @Override
    public List<Results> setResponses( long idTest,long idQuestion,CHTEanswers answers) {
       

        if(answers.isAnswer()){
            Questions question = questionRepository.findById(idQuestion).get();
            question.setAnswer(answers.isAnswer());
            questionRepository.save(question);
            
            Results result = resultRepository.findByTestIdAndAspecto(idTest,answers.getAspecto());
            result.setValue(result.getValue()+1);
            resultRepository.save(result);
        } else {
            return resultRepository.findAll();
        }

        return resultRepository.findAll();


    }

    


    

    @Override
    public String deleteTest(long idTets) {
        testRepository.deleteById(idTets);  
        return "Test Borrado Correctamente";      
    }

    @Override
    public Questions getQuestion(long idQuestion) {

        Questions question = this.questionRepository.findById(idQuestion).get();

        return question;

    }

    @Override
    public CHTEtest getTest(long idTest) {

        CHTEtest chtEtest = this.testRepository.findById(idTest).get();

        /* 
        CHTEtestRequest testRequest = new CHTEtestRequest();
        BeanUtils.copyProperties(chtEtest, testRequest);
        */
        return chtEtest;
    }

    @Override
    public List<Results> getResults(long idTest) {

        List<Results> results = this.resultRepository.findAllByTestId(idTest);

        return results;
    }

    @Override
    public String createTest(long userId, CHTEtestRequest test) {
        
        log.debug("El contenido para guardar es: {}", test);
        log.info("El contenido para guardar es: {}", test);
        
        
        CHTEtest chtEtest = CHTEtest.builder()
                .id(test.getId())
                .description(test.getDescription())
                .name(test.getName())
                .userId(userId)
                .build();
        log.debug("El test a guardar es: ", chtEtest);
        log.info("El test a guardar es: ", chtEtest);
        testRepository.save(chtEtest);
        log.info("TEST SERVICE - Test created successfully!"+chtEtest);
        log.info("TEST SERVICE - Uploading questions");

        List<Questions> questions = test.getQuestions()
                .stream()
                .map( question ->{
                    Questions newQuestion = Questions.builder()
                        .id(question.getId())
                        .question(question.getQuestion())
                        .answer(question.isAnswer())
                        .testGroup(question.getTestGroup())
                        .test(chtEtest)
                        .build();
                        this.questionRepository.save(newQuestion);
                        return newQuestion;
                    }
                ).collect(Collectors.toList());
        log.info("TEST SERVICE - questions added" + questions);


        log.debug("TEST SERVICE - questions added",questionRepository.findAll());

        List<Results> results = test.getResults()
                .stream()
                .map( result ->{
                    Results newResult = Results.builder()
                        .aspecto(result.getAspecto())
                        .value(result.getValue())
                        .test(chtEtest)
                        .build();
                        this.resultRepository.save(newResult);
                        return newResult;
                    }
                ).collect(Collectors.toList());
        log.info("TEST SERVICE - results added" + results);


        return "TEST CREADO EXITOSAMENTE";

    }

    /*@Override
    public List<Questions> getTestQuestionsById(Long id) {
        CHTEtest tests = testRepository.findById(id).get();
        return tests.getQuestions();

    }*/

    
}
