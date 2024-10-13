package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.auth.JwtResponse;
import com.tamthong.finance_tracker_api.dto.auth.LoginRequestDTO;
import com.tamthong.finance_tracker_api.dto.auth.RegisterRequestDTO;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.service.AuthenticationService;
import com.tamthong.finance_tracker_api.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequestDTO registerRequestDTO) {
        User user = authenticationService.register(registerRequestDTO);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticate(@RequestBody LoginRequestDTO loginRequestDTO) {
        JwtResponse jwtResponse = authenticationService.login(loginRequestDTO);
        return ResponseEntity.ok(jwtResponse);
    }


}
