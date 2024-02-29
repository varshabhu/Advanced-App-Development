package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.EnrollDto;

public interface EnrollService {
    EnrollDto createEnroll(EnrollDto enrollDto);

    EnrollDto getEnrollById(Long enrollId);

    List<EnrollDto> getAllEnrolls();
}
