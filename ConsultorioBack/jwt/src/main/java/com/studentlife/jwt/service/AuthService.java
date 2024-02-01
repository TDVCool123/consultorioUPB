package com.studentlife.jwt.service;

import com.studentlife.jwt.models.AuthResponse;
import com.studentlife.jwt.models.LoginRequest;
import com.studentlife.jwt.models.RegisterRequest;

public interface AuthService {

    AuthResponse login(LoginRequest request);

    AuthResponse register(RegisterRequest request);
    
} 
