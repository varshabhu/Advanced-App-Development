package com.example.demo.demo.dto;
// import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDto {
    private Long id;
    private String name;
    private String email;
    private Long number;
    private String address;
    private String rating;
    private String feed;
}