package com.studentlife.jwt.external.testService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.studentlife.jwt.external.models.CHTEtestRequest;

@FeignClient(name="TEST-SERVICE/test")  // localhost:8083/test
public interface TestService {

    
    @PostMapping("/{userId}")  // localhost:8083/test
    public String createTest(@PathVariable long userId,
        @RequestBody CHTEtestRequest test);

}
