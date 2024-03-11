package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.demo.entity.AddUser;

public interface AddUserRepository extends JpaRepository<AddUser, Long> {

}
