package com.marketplace_backend.Project.service.impl;

import com.marketplace_backend.Project.dto.AuthResponse;
import com.marketplace_backend.Project.dto.LoginRequest;
import com.marketplace_backend.Project.dto.RegisterRequest;
import com.marketplace_backend.Project.entity.User;
import  com.marketplace_backend.Project.entity.UserRole;
import com.marketplace_backend.Project.repository.UserRepository;
import com.marketplace_backend.Project.service.AuthService;
import com.marketplace_backend.Project.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private  final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public AuthResponse register(RegisterRequest request) {
        if(userRepository.existsByEmail(request.getEmail())){
            throw  new RuntimeException("Email Already exists");
        }
        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new RuntimeException("Phone number already exists");
        }
        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phoneNumber(request.getPhoneNumber())
                .city(request.getCity())
                .state(request.getState())
                .role(UserRole.USER)
                .build();
        User savedUser = userRepository.save(user);

        String token = jwtService.generatedToken(savedUser.getEmail());
        return AuthResponse.builder()
                .message("User registered successfully")
                .token(token)
                .build();
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password"));
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid email or password");
        }
        String token = jwtService.generatedToken(user.getEmail());

        return AuthResponse.builder()
                .message("Login successful")
                .token(token)
                .build();


    }
}
