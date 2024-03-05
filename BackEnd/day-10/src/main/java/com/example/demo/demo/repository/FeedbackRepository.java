package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.demo.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
