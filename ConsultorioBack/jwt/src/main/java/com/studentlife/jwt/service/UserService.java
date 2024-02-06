package com.studentlife.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentlife.jwt.external.models.CHTEtestRequest;
import com.studentlife.jwt.external.testService.TestService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserService{

    @Autowired
    private TestService testService;

    public String createTestFromUser(long userId, CHTEtestRequest request){
        log.info("User Service - El contenido a guardar es: ", request);
        testService.createTest(userId, request);
        return "Test Mandado para crear";
    }
}
