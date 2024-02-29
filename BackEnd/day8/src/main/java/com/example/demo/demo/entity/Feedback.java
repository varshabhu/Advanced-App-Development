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
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String Name;
 
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "phoneNo", nullable = false, unique = true)
    private String phoneNo;
    @Column(name = "feedback", nullable = false)
    private String your_Feedback;
    @Column(name = "address", nullable = false)
    private String suggestion_to_improve;


   
    // @Column(name = "role", nullable = false, unique = true)
    // private String role;

}
