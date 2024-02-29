package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.FeedbackDto;

public interface FeedbackService {
    FeedbackDto createFeedback(FeedbackDto feedbackDto);

    FeedbackDto getFeedbackById(Long feedbackId);

    List<FeedbackDto> getAllFeedbacks();
}
