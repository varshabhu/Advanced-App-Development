package com.example.demo.demo.service.impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.demo.entity.Feedback;
import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.mapper.FeedbackMapper;
import com.example.demo.demo.repository.FeedbackRepository;
import com.example.demo.demo.service.FeedbackService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{
     private FeedbackRepository feedbackRepository;
      @Override
    public List<FeedbackDto> getAllFeedBack() {
        List<Feedback> employees = feedbackRepository.findAll();

        List<FeedbackDto> employeeDtos = new ArrayList<>();
        for (Feedback employee : employees) {
            employeeDtos.add(FeedbackMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
    
    @Override
    public FeedbackDto createFeedback(FeedbackDto servicesdto) {

        Feedback services = FeedbackMapper.maptoEmployee(servicesdto);
        Feedback savedServices = feedbackRepository.save(services);
        return FeedbackMapper.maptoEmployeeDto(savedServices);
    }

}