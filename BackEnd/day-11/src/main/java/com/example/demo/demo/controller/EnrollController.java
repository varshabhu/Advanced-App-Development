package com.example.demo.demo.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;
import com.example.demo.demo.dto.EnrollDto;
import com.example.demo.demo.service.EnrollService;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/enrolls")
public class EnrollController {
    private EnrollService enrollService;
    @PostMapping
    public ResponseEntity<EnrollDto> createEnroll(@RequestBody EnrollDto enrollDto) {
        EnrollDto savedEnroll = enrollService.createEnroll(enrollDto);
        return new ResponseEntity<>(savedEnroll, HttpStatus.CREATED);
    }
    // @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<EnrollDto> getEnrollId(@PathVariable("id") Long enrollId) {
        EnrollDto enrollDto = enrollService.getEnrollById(enrollId);
        return ResponseEntity.ok(enrollDto);
    }

    @GetMapping
    public ResponseEntity<List<EnrollDto>> getAllEnrolls() {
        List<EnrollDto> enrolls = enrollService.getAllEnrolls();
        return ResponseEntity.ok(enrolls);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnrollDto> updateEnroll(@PathVariable("id") Long enrollId, @RequestBody EnrollDto enrollDto) {
        EnrollDto updatedEnroll = enrollService.updateEnroll(enrollId, enrollDto);
        return ResponseEntity.ok(updatedEnroll);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnroll(@PathVariable("id") Long enrollId) {
        enrollService.deleteEnroll(enrollId);
        return ResponseEntity.noContent().build();
    }

}
