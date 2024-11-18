package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {
    private final UserService userService;
    @GetMapping("/users")
    public ResponseEntity<List<User>> findAllUsers() {
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @PatchMapping("/users/setrole/{id}")
    public ResponseEntity<User> setRole(@PathVariable Long id, @RequestBody Map<String, String> request) {
        String role = request.get("role");
        return ResponseEntity.ok(userService.setRole(id, role));
    }

        @PatchMapping("/users/lock/{id}")
        public ResponseEntity<User> lockUserAccount(@PathVariable Long id) {
            return ResponseEntity.ok(userService.lockUserAccount(id));
        }

}