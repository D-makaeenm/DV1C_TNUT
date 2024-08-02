package com.Zero.controller;

import com.Zero.dto.request.ApiResponse;
import com.Zero.dto.request.UserCreationRequest;
import com.Zero.dto.request.UserUpdateRequest;
import com.Zero.entity.User;
import com.Zero.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    ApiResponse<User> createUser(@RequestBody @Valid UserCreationRequest request) {
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createRequest(request));
        return apiResponse;
    }
    @GetMapping
    List<User> getAllUsers() {
        return userService.getUser();
    }


    @GetMapping("/{userId}")
    User getUser(@PathVariable("userId") String userId){
        return userService.getUser(userId);
    }

    @PutMapping("/{userId}")
    User updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request){
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    String deleteUser(@PathVariable String userId){
        userService.deleteUser(userId);
        return "User deleted";
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    String login(@RequestBody User loginRequest){
        boolean isAuthenticated = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());
        if (isAuthenticated) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
}

