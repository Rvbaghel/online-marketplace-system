package com.marketplace_backend.Project.dto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequest {

    private String fullName;

    private String email;

    private String password;

    private String phoneNumber;

    private String city;

    private String state;
}