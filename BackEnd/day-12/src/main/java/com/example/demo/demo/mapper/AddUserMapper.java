package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.AddUser;

import com.example.demo.demo.dto.AddUserDto;

public class AddUserMapper {

    public static AddUserDto maptoAddUserDto(AddUser addUser) {
        return new AddUserDto(
                addUser.getId(),
                addUser.getName(),
                addUser.getEmail(),
                addUser.getRole()
           
        );
    }

    public static AddUser maptoAddUser(AddUserDto addUserdto) {
        return new AddUser(
            addUserdto.getId(),
            addUserdto.getName(),
             addUserdto.getEmail(),
            addUserdto.getRole()
           
          

        );
    }

}
