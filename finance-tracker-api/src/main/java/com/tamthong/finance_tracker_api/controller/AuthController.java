package com.tamthong.finance_tracker_api.controller;


import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;
import com.tamthong.finance_tracker_api.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
