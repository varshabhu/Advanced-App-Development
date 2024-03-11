package com.example.demo.demo.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.service.FeedbackService;
import lombok.AllArgsConstructor;
@AllArgsConstructor
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    private FeedbackService feedbackService;
    @GetMapping
    public ResponseEntity<List<FeedbackDto>> getAllFeedBack() {
        List<FeedbackDto> profile = feedbackService.getAllFeedBack();
        return ResponseEntity.ok(profile);
    }
     @PostMapping
    public ResponseEntity<FeedbackDto> createFeedBack(@RequestBody FeedbackDto newProfileDto) {
        FeedbackDto createdProfile = feedbackService.createFeedback(newProfileDto);
        return ResponseEntity.ok(createdProfile);
    }
}