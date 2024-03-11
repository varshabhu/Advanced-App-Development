package com.example.demo.demo.mapper;
import com.example.demo.demo.dto.FeedbackDto;

import com.example.demo.demo.entity.Feedback;

public class FeedbackMapper {
             public static FeedbackDto maptoEmployeeDto(Feedback sign) {
        return new FeedbackDto(
                sign.getId(),
                sign.getName(),
                sign.getEmail(),
                sign.getNumber(),
                sign.getAddress(),
                sign.getRating(),
               
                sign.getFeed()
                );
    }

    public static Feedback maptoEmployee(FeedbackDto signTo) {
        return new Feedback(
            signTo.getId(),
            signTo.getName(),
            signTo.getEmail(),
            signTo.getNumber(),
            signTo.getAddress(),
            signTo.getRating(),
           
            signTo.getFeed()
            );
}
}