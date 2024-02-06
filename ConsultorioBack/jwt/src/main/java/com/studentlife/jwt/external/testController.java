package com.studentlife.jwt.external;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentlife.jwt.external.models.CHTEtestRequest;
import com.studentlife.jwt.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/api/v2")
@RequiredArgsConstructor
public class testController {

    @Autowired
    private UserService userService;

    @PostMapping("/{userId}")
    public String realizarTest(@PathVariable long userId,@RequestBody CHTEtestRequest request){
        log.info("TEST CONTROLLER - El contenido a guardar es: ", request);

        userService.createTestFromUser(userId, request);
        return "Test Creado correctamente desde usuario";
    }
    
}
