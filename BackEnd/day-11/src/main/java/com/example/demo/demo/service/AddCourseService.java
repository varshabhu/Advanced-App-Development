package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.AddCourseDto;

public interface AddCourseService {
    AddCourseDto createAddCourse(AddCourseDto  addCoursedto);

    AddCourseDto getAddCourseById(Long addCourseId);

    List<AddCourseDto> getAllAddCourses();

    AddCourseDto updateAddCourse(Long addCourseId, AddCourseDto addCoursedto);

    void deleteAddCourse(Long addCourseId);
}
