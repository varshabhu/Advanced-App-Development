package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    private final EnrollRepository enrollRepository;

    @Override
    public EnrollDto createEnroll(EnrollDto enrollDto) {
        Enroll enroll = EnrollMapper.maptoEnroll(enrollDto);
        Enroll savedEnroll = enrollRepository.save(enroll);
        return EnrollMapper.maptoEnrollDto(savedEnroll);
    }

    @Override
    public EnrollDto getEnrollById(Long enrollId) {
        Enroll enroll = enrollRepository.findById(enrollId)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id : " + enrollId));

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
        Optional<Enroll> optionalEnroll = enrollRepository.findById(enrollId);
        Enroll existingEnroll = optionalEnroll
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id: " + enrollId));

        // Update fields with values from EnrollDto
        existingEnroll.setFirst_name(enrollDto.getFirst_name());
        existingEnroll.setLast_name(enrollDto.getLast_name());
        existingEnroll.setPhone_no(enrollDto.getPhone_no());
        existingEnroll.setEmail(enrollDto.getEmail());
        existingEnroll.setCourse_name(enrollDto.getCourse_name());
        existingEnroll.setBranch(enrollDto.getBranch());
        existingEnroll.setRole(enrollDto.getRole());

        // Save the updated entity back to the repository
        Enroll updatedEnroll = enrollRepository.save(existingEnroll);
        return EnrollMapper.maptoEnrollDto(updatedEnroll);
    }

    @Override
    public void deleteEnroll(Long enrollId) {
        enrollRepository.deleteById(enrollId);
    }
}
