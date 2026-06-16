package com.marketplace_backend.Project.service;

import com.marketplace_backend.Project.dto.AuthResponse;
import com.marketplace_backend.Project.dto.LoginRequest;
import com.marketplace_backend.Project.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
