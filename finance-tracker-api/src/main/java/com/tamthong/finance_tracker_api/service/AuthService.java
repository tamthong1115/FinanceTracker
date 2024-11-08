package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.AccountDTO;
import com.tamthong.finance_tracker_api.dto.AuthResponse;
import com.tamthong.finance_tracker_api.dto.LoginRequest;
import com.tamthong.finance_tracker_api.dto.RegisterRequest;
import com.tamthong.finance_tracker_api.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final AccountService accountService;

    @Transactional
    public AuthResponse register(RegisterRequest request) {

        AuthResponse user = userService.register(request);
        User userEntity = userService.findUserById(user.getUser().getId());



        AccountDTO accountDTO = new AccountDTO();
        accountDTO.setName("Default Account");
        accountDTO.setUser(userEntity);
        accountDTO.setBalance(BigDecimal.ZERO);
        accountDTO.setType("Cash");

        accountService.createAccount(accountDTO);

        return user;
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        try {
            return userService.authenticateUser(request);
        } catch (Exception e) {
            throw new RuntimeException("Invalid email/password combination");
        }
    }

    @Transactional
    public boolean validateToken(String token) {

        if (token == null) {
            return false;
        }

        return userService.validateToken(token);
    }

    @Transactional
    public void logout() {
        // clear the security context
        SecurityContext context = SecurityContextHolder.getContext();
        context.setAuthentication(null);

    }
}
