package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.SignupDto;
import com.example.demo.demo.entity.Signup;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.SignupMapper;
import com.example.demo.demo.repository.SignupRepository;
import com.example.demo.demo.service.SignupService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SignupServiceImpl implements SignupService {

    private SignupRepository signupRepository;

    @Override
    public SignupDto createSignup(SignupDto signupdto) {

        Signup signup = SignupMapper.maptoSignup(signupdto);
        Signup savedSignup = signupRepository.save(signup);
        return SignupMapper.maptoSignupDto(savedSignup);
    }

    @Override
    public SignupDto getSignupById(Long signupId) {
        Signup signup = signupRepository.findById(signupId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + signupId));

        return SignupMapper.maptoSignupDto(signup);
    }

    @Override
    public List<SignupDto> getAllSignups() {
        List<Signup> signups = signupRepository.findAll();
    
        List<SignupDto> signupDtos = new ArrayList<>();
        for (Signup signup : signups) {
            signupDtos.add(SignupMapper.maptoSignupDto(signup));
        }
    
        return signupDtos;
    }
    
}
