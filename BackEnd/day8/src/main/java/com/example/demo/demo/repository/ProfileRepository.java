package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.demo.entity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

}
