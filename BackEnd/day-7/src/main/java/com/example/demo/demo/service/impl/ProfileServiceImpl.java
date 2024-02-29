package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.ProfileDto;
import com.example.demo.demo.entity.Profile;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.ProfileMapper;
import com.example.demo.demo.repository.ProfileRepository;
import com.example.demo.demo.service.ProfileService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private ProfileRepository profileRepository;

    @Override
    public ProfileDto createProfile(ProfileDto profiledto) {

        Profile profile = ProfileMapper.maptoProfile(profiledto);
        Profile savedProfile = profileRepository.save(profile);
        return ProfileMapper.maptoProfileDto(savedProfile);
    }

    @Override
    public ProfileDto getProfileById(Long profileId) {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + profileId));

        return ProfileMapper.maptoProfileDto(profile);
    }

    @Override
    public List<ProfileDto> getAllProfiles() {
        List<Profile> profiles = profileRepository.findAll();
    
        List<ProfileDto> profileDtos = new ArrayList<>();
        for (Profile profile : profiles) {
            profileDtos.add(ProfileMapper.maptoProfileDto(profile));
        }
    
        return profileDtos;
    }
    
}
