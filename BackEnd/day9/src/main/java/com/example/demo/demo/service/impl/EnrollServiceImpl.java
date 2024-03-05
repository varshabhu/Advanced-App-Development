package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.EnrollDto;
import com.example.demo.demo.entity.Enroll;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.EnrollMapper;
import com.example.demo.demo.repository.EnrollRepository;
import com.example.demo.demo.service.EnrollService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EnrollServiceImpl implements EnrollService {

    private EnrollRepository enrollRepository;

    @Override
    public EnrollDto createEnroll(EnrollDto enrolldto) {

        Enroll enroll = EnrollMapper.maptoEnroll(enrolldto);
        Enroll savedEnroll = enrollRepository.save(enroll);
        return EnrollMapper.maptoEnrollDto(savedEnroll);
    }

    @Override
    public EnrollDto getEnrollById(Long enrollId) {
        Enroll enroll = enrollRepository.findById(enrollId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + enrollId));

        return EnrollMapper.maptoEnrollDto(enroll);
    }

    @Override
    public List<EnrollDto> getAllEnrolls() {
        List<Enroll> enrolls = enrollRepository.findAll();
    
        List<EnrollDto> enrollDtos = new ArrayList<>();
        for (Enroll enroll : enrolls) {
            enrollDtos.add(EnrollMapper.maptoEnrollDto(enroll));
        }
    
        return enrollDtos;
    }

    @Override
    public EnrollDto updateEnroll(Long enrollId, EnrollDto enrollDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEnroll'");
    }

    @Override
    public void deleteEnroll(Long enrollId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteEnroll'");
    }
    
}
