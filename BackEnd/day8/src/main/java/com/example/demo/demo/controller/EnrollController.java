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

import com.example.demo.demo.dto.EnrollDto;
import com.example.demo.demo.service.EnrollService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/enrolls")
public class EnrollController {

    private EnrollService enrollService;

    @PostMapping
    public ResponseEntity<EnrollDto> createEnroll(@RequestBody EnrollDto enrollDto) {
        EnrollDto savedEnroll = enrollService.createEnroll(enrollDto);
        return new ResponseEntity<>(savedEnroll, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EnrollDto> getEnrollId(@PathVariable("id") Long enrollId) {
        EnrollDto enrollDto = enrollService.getEnrollById(enrollId);
        return ResponseEntity.ok(enrollDto);
    }

   
    @GetMapping
    public ResponseEntity<List<EnrollDto>> getAllEnrolls() {
        List<EnrollDto> enrolls = enrollService.getAllEnrolls();
        return ResponseEntity.ok(enrolls);
    }

}
