package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Signup;

import com.example.demo.demo.dto.SignupDto;

public class SignupMapper {

    public static SignupDto maptoSignupDto(Signup signup) {
        return new SignupDto(
                signup.getId(),
                signup.getName(),
             
                signup.getEmail(),
                signup.getPhoneNo(),
                signup.getPassword(),
                signup.getRoles()
                // signup.getRole()

        );
    }

    public static Signup maptoSignup(SignupDto signupdto) {
        return new Signup(
                signupdto.getId(),
                signupdto.getName(),
            
                signupdto.getEmail(),
                signupdto.getPhoneNo(),
                signupdto.getPassword(),
                signupdto.getRoles()
                // signupdto.getRole()

        );
    }

}
