package com.studentlife.tests.controller;

import java.util.List;


import com.studentlife.tests.entity.CHTEtest;
import com.studentlife.tests.entity.Questions;
import com.studentlife.tests.entity.Results;
import com.studentlife.tests.models.CHTEanswers;
import com.studentlife.tests.models.QuestionRequest;
import com.studentlife.tests.models.CHTEtestRequest;
import com.studentlife.tests.models.ResultRequest;
import com.studentlife.tests.service.CHTEtestService;

import jakarta.websocket.server.PathParam;
import lombok.extern.log4j.Log4j2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private CHTEtestService testService;

    @PostMapping("/{userId}")
    public String createTest(@PathVariable long userId, @RequestBody CHTEtestRequest test){
        log.debug("El contenido a guardar es: ", test);

        testService.createTest(userId, test);
        return "Test Creado correctamente";
    }

    @GetMapping("/{idTest}")
    public CHTEtest getTest(@PathVariable long idTest){
        return testService.getTest(idTest);
    }

    @GetMapping("/results/{idTest}")
    public List<Results> getResults(@PathVariable long idTest){
        return testService.getResults(idTest);
    }

    @GetMapping("/question/{idQuestion}")
    public Questions getQuestion(@PathVariable long idQuestion){
        return testService.getQuestion(idQuestion);
    }
/*
    @GetMapping()
    public List<QuestionRequest> getTestQuestionsById(@PathVariable Long id){
        return testService.getTestQuestionsById(id);
    }
    
    @DeleteMapping("/{idTest}")
    public String deleteTest(@PathVariable long idTest){
        testService.deleteTest(idTest);
        return "Test Borrado correctamente";
    }
    
    */
    @PutMapping("/ponerResultado/{idTest}/{idQuestion}")
    public List<Results> setResponses(@PathVariable long idTest,@PathVariable long idQuestion,@RequestBody CHTEanswers answers){
        return testService.setResponses(idTest,idQuestion,answers);
    }  
}
