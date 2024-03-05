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
    private String First_Name;
    private String Last_Name;
    private String email;
    private String course_name;
    private String phoneNo;
   private String branch;
    // private String role;
}
