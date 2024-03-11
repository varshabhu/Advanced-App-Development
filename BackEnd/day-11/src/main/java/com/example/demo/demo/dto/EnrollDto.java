package com.example.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnrollDto {
    private Long id;
    private String first_name;
    private String last_name;
    private String email;
    private String course_name;
    private String phone_no;
    private String branch;
    private String role;
    // private String role;
}
