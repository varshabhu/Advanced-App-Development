package com.example.demo.demo.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;
import com.example.demo.demo.dto.AddCourseDto;
import com.example.demo.demo.service.AddCourseService;

@AllArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/courses") // Modified endpoint
public class AddCourseController {
    private AddCourseService addCourseService;

    // @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<AddCourseDto> createAddCourse(@RequestBody AddCourseDto addCourseDto) {
        System.out.println(addCourseDto.getTitle());
        System.out.println(addCourseDto.getDescription());
        AddCourseDto savedAddCourse = addCourseService.createAddCourse(addCourseDto);
        return new ResponseEntity<>(savedAddCourse, HttpStatus.CREATED);
    }

    @GetMapping("/{id}") // Modified endpoint
    public ResponseEntity<AddCourseDto> getAddCourseId(@PathVariable("id") Long addCourseId) {
        AddCourseDto addCourseDto = addCourseService.getAddCourseById(addCourseId);
        return ResponseEntity.ok(addCourseDto);
    }

    @GetMapping // Modified endpoint
    public ResponseEntity<List<AddCourseDto>> getAllAddCourses() {
        List<AddCourseDto> addCourses = addCourseService.getAllAddCourses();
        return ResponseEntity.ok(addCourses);
    }

    @PutMapping("/{id}") // Modified endpoint
    public ResponseEntity<AddCourseDto> updateAddCourse(@PathVariable("id") Long addCourseId,
            @RequestBody AddCourseDto addCourseDto) {
        AddCourseDto updatedAddCourse = addCourseService.updateAddCourse(addCourseId, addCourseDto);
        return ResponseEntity.ok(updatedAddCourse);
    }

    @DeleteMapping("/{id}") // Modified endpoint
    public ResponseEntity<Void> deleteAddCourse(@PathVariable("id") Long addCourseId) {
        addCourseService.deleteAddCourse(addCourseId);
        return ResponseEntity.noContent().build();
    }
}
