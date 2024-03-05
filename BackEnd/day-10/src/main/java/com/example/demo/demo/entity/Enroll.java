package com.example.demo.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "enroll")
public class Enroll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name", nullable = false)
    private String First_Name;
    @Column(name = "last_name", nullable = false)
    private String Last_Name;
    @Column(name = "phone_No", nullable = false, unique = true)
    private String phoneNo;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "cname", nullable = false)
    private String course_name;
    @Column(name = "branch", nullable = false)
    private String branch;


}
