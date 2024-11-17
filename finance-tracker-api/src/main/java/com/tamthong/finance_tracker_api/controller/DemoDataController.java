package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.config.DataSeeder;
import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo")
@RequiredArgsConstructor
public class DemoDataController {
    private final DataSeeder dataSeeder;
    private final UserService userService;

    @PostMapping("/seed")
    public ResponseEntity<String> seedData() {
        try {
            Long currentUserId = userService.getCurrentUserId();
            dataSeeder.seedDataForUser(currentUserId);
            return ResponseEntity.ok("Demo data generated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error generating demo data: " + e.getMessage());
        }
    }
}
