package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.entity.Feedback;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.FeedbackMapper;
import com.example.demo.demo.repository.FeedbackRepository;
import com.example.demo.demo.service.FeedbackService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private FeedbackRepository feedbackRepository;

    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackdto) {

        Feedback feedback = FeedbackMapper.maptoFeedback(feedbackdto);
        Feedback savedFeedback = feedbackRepository.save(feedback);
        return FeedbackMapper.maptoFeedbackDto(savedFeedback);
    }

    @Override
    public FeedbackDto getFeedbackById(Long feedbackId) {
        Feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + feedbackId));

        return FeedbackMapper.maptoFeedbackDto(feedback);
    }

    @Override
    public List<FeedbackDto> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
    
        List<FeedbackDto> feedbackDtos = new ArrayList<>();
        for (Feedback feedback : feedbacks) {
            feedbackDtos.add(FeedbackMapper.maptoFeedbackDto(feedback));
        }
    
        return feedbackDtos;
    }
    
}
