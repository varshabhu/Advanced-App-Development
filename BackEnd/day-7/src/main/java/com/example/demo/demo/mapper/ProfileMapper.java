
package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Profile;

import com.example.demo.demo.dto.ProfileDto;

public class ProfileMapper {

    public static ProfileDto maptoProfileDto(Profile profile) {
        return new ProfileDto(
                profile.getId(),
                profile.getName(),
                profile.getEmail(),
                profile.getPhoneNo(),
                profile.getAddress()
              
                // signup.getRole()

        );
    }

    public static Profile maptoProfile(ProfileDto profiledto) {
        return new Profile(
            profiledto.getId(),
            profiledto.getName(),
            profiledto.getEmail(),
            profiledto.getPhoneNo(),
            profiledto.getAddress()
          
          

        );
    }

}
