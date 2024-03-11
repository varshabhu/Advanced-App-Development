package com.example.demo.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.AddUserDto;
import com.example.demo.demo.entity.AddUser;
import com.example.demo.demo.exception.ResourceNotFoundException;
import com.example.demo.demo.mapper.AddUserMapper;
import com.example.demo.demo.repository.AddUserRepository;
import com.example.demo.demo.service.AddUserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AddUserServiceImpl implements AddUserService {

    private final AddUserRepository addUserRepository;

    @Override
    public AddUserDto createAddUser(AddUserDto addUserDto) {
        AddUser addUser = AddUserMapper.maptoAddUser(addUserDto);
        AddUser savedAddUser = addUserRepository.save(addUser);
        return AddUserMapper.maptoAddUserDto(savedAddUser);
    }

    @Override
    public AddUserDto getAddUserById(Long addUserId) {
        AddUser addUser = addUserRepository.findById(addUserId)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id : " + addUserId));

        return AddUserMapper.maptoAddUserDto(addUser);
    }

    @Override
    public List<AddUserDto> getAllAddUsers() {
        List<AddUser> addUsers = addUserRepository.findAll();

        List<AddUserDto> addUserDtos = new ArrayList<>();
        for (AddUser addUser : addUsers) {
            addUserDtos.add(AddUserMapper.maptoAddUserDto(addUser));
        }

        return addUserDtos;
    }

    @Override
    public AddUserDto updateAddUser(Long addUserId, AddUserDto addUserDto) {
        Optional<AddUser> optionalAddUser = addUserRepository.findById(addUserId);
        AddUser existingAddUser = optionalAddUser
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not found with id: " + addUserId));

        // Update fields with values from EnrollDto
        existingAddUser.setName(addUserDto.getName());

        existingAddUser.setEmail(addUserDto.getEmail());
        existingAddUser.setRole(addUserDto.getRole());

        // Save the updated entity back to the repository
        AddUser updatedAddUser = addUserRepository.save(existingAddUser);
        return AddUserMapper.maptoAddUserDto(updatedAddUser);
    }

    @Override
    public void deleteAddUser(Long addUserId) {
        addUserRepository.deleteById(addUserId);
    }
}
