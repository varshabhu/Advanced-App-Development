package com.example.demo.demo.service;
import java.util.List;
import com.example.demo.demo.dto.FeedbackDto;


public interface FeedbackService {
     FeedbackDto createFeedback(FeedbackDto newFeedbackDto);
     List<FeedbackDto> getAllFeedBack();
  
}