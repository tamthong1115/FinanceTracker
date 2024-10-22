package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
public class TestController {
    private final UserService userService;

    @GetMapping("/public")
    public ResponseEntity<Map<String, String>> publicEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Public endpoint is working!");
        response.put("status", "success");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/authenticated")
    public ResponseEntity<Map<String, Object>> authenticatedEndpoint(Authentication authentication) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Authenticated endpoint is working!");
        response.put("status", "success");
        response.put("userEmail", authentication.getName());
        response.put("userId", userService.getCurrentUserId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/token-debug")
    public ResponseEntity<Map<String, String>> debugToken(
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        Map<String, String> response = new HashMap<>();

        if (authHeader == null) {
            response.put("status", "error");
            response.put("message", "No Authorization header");
            return ResponseEntity.ok(response);
        }

        response.put("status", "success");
        response.put("authHeader", authHeader);
        response.put("tokenPresent", String.valueOf(authHeader.startsWith("Bearer ")));
        if (authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            response.put("tokenLength", String.valueOf(token.length()));
            response.put("tokenPreview", token.substring(0, Math.min(token.length(), 20)) + "...");
        }

        return ResponseEntity.ok(response);
    }
}
