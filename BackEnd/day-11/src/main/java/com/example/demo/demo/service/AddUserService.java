package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.AddUserDto;

public interface AddUserService {
    AddUserDto createAddUser(AddUserDto  addUserdto);

    AddUserDto getAddUserById(Long addUserId);

    List<AddUserDto> getAllAddUsers();

    AddUserDto updateAddUser(Long addUserId, AddUserDto addUserdto);

    void deleteAddUser(Long addUserId);
}
