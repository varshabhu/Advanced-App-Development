package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.ProfileDto;

public interface ProfileService {
    ProfileDto createProfile(ProfileDto profileDto);

    ProfileDto getProfileById(Long profileId);

    List<ProfileDto> getAllProfiles();
}
