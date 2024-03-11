// AddCourseDto.java
package com.example.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddCourseDto {
    private Long id;
    private String title;
    private String description;
    private int price;
    private String imageUrl;
}
