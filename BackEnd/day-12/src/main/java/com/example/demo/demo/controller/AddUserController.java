package com.example.demo.demo.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;
import com.example.demo.demo.dto.AddUserDto;
import com.example.demo.demo.service.AddUserService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/addusers")
public class AddUserController {
    private AddUserService addUserService;
    @PostMapping
    public ResponseEntity<AddUserDto> createAddUser(@RequestBody AddUserDto addUserDto) {
        AddUserDto savedAddUser = addUserService.createAddUser(addUserDto);
        return new ResponseEntity<>(savedAddUser, HttpStatus.CREATED);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<AddUserDto> getAddUserId(@PathVariable("id") Long addUserId) {
        AddUserDto addUserDto = addUserService.getAddUserById(addUserId);
        return ResponseEntity.ok(addUserDto);
    }

    @GetMapping
    public ResponseEntity<List<AddUserDto>> getAllAddUsers() {
        List<AddUserDto> addUsers = addUserService.getAllAddUsers();
        return ResponseEntity.ok(addUsers);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddUserDto> updateAddUser(@PathVariable("id") Long addUserId, @RequestBody AddUserDto addUserDto) {
        AddUserDto updatedAddUser = addUserService.updateAddUser(addUserId, addUserDto);
        return ResponseEntity.ok(updatedAddUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddUser(@PathVariable("id") Long addUserId) {
        addUserService.deleteAddUser(addUserId);
        return ResponseEntity.noContent().build();
    }

}
