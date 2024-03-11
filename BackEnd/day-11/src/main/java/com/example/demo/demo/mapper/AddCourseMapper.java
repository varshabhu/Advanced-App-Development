// AddCourseMapper.java
package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.AddCourse;
import com.example.demo.demo.dto.AddCourseDto;

public class AddCourseMapper {

    public static AddCourseDto maptoAddCourseDto(AddCourse addCourse) {
        return new AddCourseDto(
                addCourse.getId(),
                addCourse.getTitle(),
                addCourse.getDescription(),
                addCourse.getPrice(),
                addCourse.getImageUrl()
        );
    }

    public static AddCourse maptoAddCourse(AddCourseDto addCourseDto) {
        return new AddCourse(
            addCourseDto.getId(),
            addCourseDto.getTitle(),
            addCourseDto.getDescription(),
            addCourseDto.getPrice(),
            addCourseDto.getImageUrl()
        );
    }

}
