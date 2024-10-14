package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.auth.JwtResponse;
import com.tamthong.finance_tracker_api.dto.auth.LoginRequestDTO;
import com.tamthong.finance_tracker_api.dto.auth.RegisterRequestDTO;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthenticationService(
            AuthenticationManager authenticationManager,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public User register(RegisterRequestDTO input) {
        User user = new User();
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        user.setName(input.getName());

        return userRepository.save(user);
    }

    public JwtResponse login(LoginRequestDTO loginRequestDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDTO.getEmail(),
                        loginRequestDTO.getPassword()
                )
        );

        try {
            var user = userRepository.findByEmail(loginRequestDTO.getEmail());

            var jwtToken = jwtService.generateToken(user);

            return JwtResponse.builder()
                    .token(jwtToken)
                    .expirationTime(jwtService.getExpirationTime())
                    .build();


        } catch (Exception e) {
            throw new RuntimeException("Invalid email or password");
        }


    }



}
