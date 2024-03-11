package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Enroll;

import com.example.demo.demo.dto.EnrollDto;

public class EnrollMapper {

    public static EnrollDto maptoEnrollDto(Enroll enroll) {
        return new EnrollDto(
                enroll.getId(),
                enroll.getFirst_name(),
                enroll.getLast_name(),
                enroll.getPhone_no(),
                enroll.getEmail(),
                enroll.getCourse_name(),
                enroll.getBranch(),
                enroll.getRole()
              
               

        );
    }

    public static Enroll maptoEnroll(EnrollDto enrolldto) {
        return new Enroll(
            enrolldto.getId(),
            enrolldto.getFirst_name(),
            enrolldto.getLast_name(),
            enrolldto.getPhone_no(),
            enrolldto.getEmail(),
            enrolldto.getCourse_name(),
            enrolldto.getBranch(),
            enrolldto.getRole()
          

        );
    }

}
