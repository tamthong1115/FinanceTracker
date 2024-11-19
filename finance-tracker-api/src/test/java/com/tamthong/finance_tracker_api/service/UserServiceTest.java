package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;
import com.tamthong.finance_tracker_api.exception.UserAlreadyExistsException;
import com.tamthong.finance_tracker_api.mapper.UserMapper;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @Mock
    private UserMapper userMapper;

    @InjectMocks
    private UserService userService;

    @Mock
    private SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    @BeforeEach
    public void setUp() {
        SecurityContextHolder.setContext(securityContext);
    }

    @Test
    public void testGetCurrentUserId() {
        String email = "test@example.com";
        User user = new User();
        user.setId(1L);
        user.setEmail(email);

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        Long userId = userService.getCurrentUserId();

        assertEquals(1L, userId);
    }

    @Test
    public void testGetCurrentUser() {
        String email = "test@example.com";
        User user = new User();
        user.setEmail(email);

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        User currentUser = userService.getCurrentUser();

        assertEquals(user, currentUser);
    }

    @Test
    public void testRegister() {
        RegisterRequest request = new RegisterRequest();
        request.setUsername("testuser");
        request.setEmail("test@example.com");
        request.setPassword("password");

        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");

        when(userRepository.existsByEmail(request.getEmail())).thenReturn(false);
        when(passwordEncoder.encode(request.getPassword())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);
        when(jwtService.generateToken(user.getEmail())).thenReturn("token");
        when(userMapper.toDTO(any(User.class))).thenReturn(new UserDTO());

        AuthResponse response = userService.register(request);

        assertNotNull(response);
        assertEquals("token", response.getToken());
    }

    @Test
    public void testAuthenticateUser() {
        LoginRequest request = new LoginRequest();
        request.setEmail("test@example.com");
        request.setPassword("password");

        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");

        when(userRepository.findByEmail(request.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(request.getPassword(), user.getPassword())).thenReturn(true);
        when(jwtService.generateToken(user.getEmail())).thenReturn("token");
        when(userMapper.toDTO(any(User.class))).thenReturn(new UserDTO());

        AuthResponse response = userService.authenticateUser(request);

        assertNotNull(response);
        assertEquals("token", response.getToken());
    }

    @Test
    public void testSave() {
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);

        User savedUser = userService.save(user);

        assertEquals(user, savedUser);
    }

    @Test
    public void testUpdateProfile() {
        User user = new User();
        user.setEmail("old@example.com");

        when(userRepository.existsByEmail("new@example.com")).thenReturn(false);
        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updateProfile(user, "newUsername", "new@example.com");

        assertEquals("newUsername", updatedUser.getUsername());
        assertEquals("new@example.com", updatedUser.getEmail());
    }

    @Test
    public void testUpdatePassword() {
        User user = new User();
        user.setPassword("oldPassword");

        when(passwordEncoder.encode("newPassword")).thenReturn("encodedNewPassword");
        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updatePassword(user, "newPassword");

        assertEquals("encodedNewPassword", updatedUser.getPassword());
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        user.setId(1L);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        doNothing().when(userRepository).delete(user);

        userService.deleteUser(1L);

        verify(userRepository, times(1)).delete(user);
    }
}
