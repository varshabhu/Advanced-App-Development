package com.example.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDto {
    private Long id;
    private String Name;
    private String email;
    private String phoneNo;
   private String Address;
    // private String role;
}
