// AddCourseServiceImpl.java
package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.AddCourseDto;
import com.example.demo.demo.entity.AddCourse;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.AddCourseMapper;
import com.example.demo.demo.repository.AddCourseRepository;
import com.example.demo.demo.service.AddCourseService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AddCourseServiceImpl implements AddCourseService {

    private final AddCourseRepository addCourseRepository;

    @Override
    public AddCourseDto createAddCourse(AddCourseDto addCourseDto) {
        AddCourse addCourse = AddCourseMapper.maptoAddCourse(addCourseDto);
        AddCourse savedAddCourse = addCourseRepository.save(addCourse);
        return AddCourseMapper.maptoAddCourseDto(savedAddCourse);
    }

    @Override
    public AddCourseDto getAddCourseById(Long addCourseId) {
        AddCourse addCourse = addCourseRepository.findById(addCourseId)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id : " + addCourseId));

        return AddCourseMapper.maptoAddCourseDto(addCourse);
    }

    @Override
    public List<AddCourseDto> getAllAddCourses() {
        List<AddCourse> addCourses= addCourseRepository.findAll();

        List<AddCourseDto> addCourseDtos = new ArrayList<>();
        for (AddCourse addCourse : addCourses) {
            addCourseDtos.add(AddCourseMapper.maptoAddCourseDto(addCourse));
        }

        return addCourseDtos;
    }

    @Override
    public AddCourseDto updateAddCourse(Long addCourseId, AddCourseDto addCourseDto) {
        Optional<AddCourse> optionalAddCourse = addCourseRepository.findById(addCourseId);
        AddCourse existingAddCourse = optionalAddCourse
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id: " + addCourseId));

        // Update fields with values from AddCourseDto
        existingAddCourse.setTitle(addCourseDto.getTitle());
        existingAddCourse.setDescription(addCourseDto.getDescription());
        existingAddCourse.setPrice(addCourseDto.getPrice());
        existingAddCourse.setImageUrl(addCourseDto.getImageUrl());

        // Save the updated entity back to the repository
        AddCourse updatedAddCourse = addCourseRepository.save(existingAddCourse);
        return AddCourseMapper.maptoAddCourseDto(updatedAddCourse);
    }

    @Override
    public void deleteAddCourse(Long addCourseId) {
        addCourseRepository.deleteById(addCourseId);
    }
}
