package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.AuthResponse;
import com.tamthong.finance_tracker_api.dto.LoginRequest;
import com.tamthong.finance_tracker_api.dto.RegisterRequest;
import com.tamthong.finance_tracker_api.exception.UserAlreadyExistsException;
import com.tamthong.finance_tracker_api.mapper.UserMapper;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserMapper userMapper;

    public Long getCurrentUserId() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return user.getId();
    }

    public User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("Email already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        User savedUser = userRepository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userMapper.toDTO(savedUser));
    }

    @Transactional(readOnly = true)
    public AuthResponse authenticateUser(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userMapper.toDTO(user));
    }
}
