package com.example.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDto {
    private Long id;
    private String   Name;
    private String email;
    private String phoneNo;
    private String your_Feedback;
    private String suggestion_to_improve;
  
    
}
