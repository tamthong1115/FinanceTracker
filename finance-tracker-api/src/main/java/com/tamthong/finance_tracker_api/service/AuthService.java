package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.AuthResponse;
import com.tamthong.finance_tracker_api.dto.LoginRequest;
import com.tamthong.finance_tracker_api.dto.RegisterRequest;
import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        UserDTO userDTO = userService.register(request);
        String token = jwtService.generateToken(request.getEmail());

        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setUser(userDTO);
        return response;
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

            User user = (User) authentication.getPrincipal();
            String token = jwtService.generateToken(user.getEmail());

            AuthResponse response = new AuthResponse();
            response.setToken(token);
            response.setUser(mapToDTO(user));
            return response;
        } catch (Exception e) {
            throw new RuntimeException("Invalid email/password combination");
        }
    }

    private UserDTO mapToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        return dto;
    }
}
