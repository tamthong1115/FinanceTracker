package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> findAllUsers() {
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @PatchMapping("/{id}/role")
    public ResponseEntity<User> setRole(@PathVariable Long id, @RequestParam String role) {
        return ResponseEntity.ok(userService.setRole(id, role));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}