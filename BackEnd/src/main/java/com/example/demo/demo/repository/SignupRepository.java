package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.demo.entity.Signup;

public interface SignupRepository extends JpaRepository<Signup, Long> {

}
