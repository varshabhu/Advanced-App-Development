package com.example.demo.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.service.FeedbackService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<FeedbackDto> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        FeedbackDto savedFeedback = feedbackService.createFeedback(feedbackDto);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<FeedbackDto> getFeedbackId(@PathVariable("id") Long feedbackId) {
        FeedbackDto feedbackDto = feedbackService.getFeedbackById(feedbackId);
        return ResponseEntity.ok(feedbackDto);
    }

   
    @GetMapping
    public ResponseEntity<List<FeedbackDto>> getAllFeedbacks() {
        List<FeedbackDto> feedbacks = feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(feedbacks);
    }

}
