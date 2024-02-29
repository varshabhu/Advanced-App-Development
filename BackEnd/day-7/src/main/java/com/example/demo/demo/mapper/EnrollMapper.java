package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Enroll;

import com.example.demo.demo.dto.EnrollDto;

public class EnrollMapper {

    public static EnrollDto maptoEnrollDto(Enroll enroll) {
        return new EnrollDto(
                enroll.getId(),
                enroll.getFirst_Name(),
                enroll.getLast_Name(),
                enroll.getEmail(),
                enroll.getPhoneNo(),
                enroll.getBranch()
              
                // signup.getRole()

        );
    }

    public static Enroll maptoEnroll(EnrollDto enrolldto) {
        return new Enroll(
            enrolldto.getId(),
            enrolldto.getFirst_Name(),
            enrolldto.getLast_Name(),
            enrolldto.getEmail(),
            enrolldto.getPhoneNo(),
            enrolldto.getBranch()
          

        );
    }

}
