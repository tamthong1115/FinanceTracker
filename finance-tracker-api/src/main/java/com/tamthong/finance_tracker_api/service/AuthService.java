package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.AuthResponse;
import com.tamthong.finance_tracker_api.dto.LoginRequest;
import com.tamthong.finance_tracker_api.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        return userService.register(request);
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        try {
            return userService.authenticateUser(request);
        } catch (Exception e) {
            throw new RuntimeException("Invalid email/password combination");
        }
    }
}
