package com.example.demo.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.example.demo.demo.dto.ProfileDto;
import com.example.demo.demo.service.ProfileService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

    private ProfileService profileService;

    @PostMapping
    public ResponseEntity<ProfileDto> createProfile(@RequestBody ProfileDto profileDto) {
        ProfileDto savedProfile = profileService.createProfile(profileDto);
        return new ResponseEntity<>(savedProfile, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<ProfileDto> getProfileId(@PathVariable("id") Long profileId) {
        ProfileDto profileDto = profileService.getProfileById(profileId);
        return ResponseEntity.ok(profileDto);
    }

   
    @GetMapping
    public ResponseEntity<List<ProfileDto>> getAllProfiles() {
        List<ProfileDto> profiles = profileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }

}
