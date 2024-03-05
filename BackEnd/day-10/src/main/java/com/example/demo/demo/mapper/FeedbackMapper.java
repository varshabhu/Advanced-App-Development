
package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Feedback;

import com.example.demo.demo.dto.FeedbackDto;

public class FeedbackMapper {

    public static FeedbackDto maptoFeedbackDto(Feedback feedback) {
        return new FeedbackDto(
                  feedback.getId(),
                feedback.getName(),
                feedback.getEmail(),
                feedback.getPhoneNo(),
                feedback.getYour_Feedback(),
                feedback.getSuggestion_to_improve()
              
                // signup.getRole()

        );
    }
     public static Feedback maptoFeedback(FeedbackDto feedbackdto) {
        return new Feedback(
            feedbackdto.getId(),
            feedbackdto.getName(),
            feedbackdto.getEmail(),
            feedbackdto.getPhoneNo(),
            feedbackdto.getYour_Feedback(),
            feedbackdto.getSuggestion_to_improve()

        );
    }

}
