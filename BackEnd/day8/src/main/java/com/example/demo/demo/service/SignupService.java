package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.SignupDto;

public interface SignupService {
    SignupDto createSignup(SignupDto signupDto);

    SignupDto getSignupById(Long signupId);

    List<SignupDto> getAllSignups();
}
