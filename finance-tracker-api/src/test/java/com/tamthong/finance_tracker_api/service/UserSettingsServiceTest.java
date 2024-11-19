package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.repository.UserSettingsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserSettingsServiceTest {

    @Mock
    private UserSettingsRepository settingsRepository;

    @Mock
    private UserService userService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserSettingsService userSettingsService;

    private User user;
    private UserSettings userSettings;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User();
        user.setId(1L);
        user.setUsername("testUser");
        user.setPassword("password");

        userSettings = new UserSettings();
        userSettings.setId(1L);
        userSettings.setUser(user);
        userSettings.setName("testUser");
    }

    @Test
    void testGetCurrentUserSettings() {
        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));

        UserSettingsDTO result = userSettingsService.getCurrentUserSettings();

        assertNotNull(result);
        assertEquals(userSettings.getName(), result.getName());
        verify(settingsRepository, times(1)).findByUserId(user.getId());
    }

    @Test
    void testUpdateProfile() {
        UpdateProfileRequest request = new UpdateProfileRequest();
        request.setName("newName");
        request.setPhone("123456789");
        request.setAddress("newAddress");

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updateProfile(request);

        assertNotNull(result);
        assertEquals(request.getName(), result.getName());
        verify(userService, times(1)).save(user);
        verify(settingsRepository, times(1)).save(userSettings);
    }

    @Test
    void testUpdatePassword() {
        UpdatePasswordRequest request = new UpdatePasswordRequest();
        request.setCurrentPassword("password");
        request.setNewPassword("newPassword");

        when(userService.getCurrentUser()).thenReturn(user);
        when(passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())).thenReturn(true);

        userSettingsService.updatePassword(request);

        verify(passwordEncoder, times(1)).encode(request.getNewPassword());
        verify(userService, times(1)).save(user);
    }

    @Test
    void testUpdatePasswordWithIncorrectCurrentPassword() {
        UpdatePasswordRequest request = new UpdatePasswordRequest();
        request.setCurrentPassword("wrongPassword");
        request.setNewPassword("newPassword");

        when(userService.getCurrentUser()).thenReturn(user);
        when(passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())).thenReturn(false);

        assertThrows(BadCredentialsException.class, () -> userSettingsService.updatePassword(request));
    }

    @Test
    void testUpdateNotificationSettings() {
        NotificationSettingsRequest request = new NotificationSettingsRequest();
        request.setEmailNotifications(true);
        request.setBudgetAlerts(true);
        request.setTransactionNotifications(true);

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updateNotificationSettings(request);

        assertNotNull(result);
        assertEquals(request.getEmailNotifications(), result.getEmailNotifications());
        verify(settingsRepository, times(1)).save(userSettings);
    }

    @Test
    void testUpdatePreferences() {
        PreferencesRequest request = new PreferencesRequest();
        request.setCurrency("USD");
        request.setFiscalMonthStartDay(1);
        request.setDateFormat("MM/DD/YYYY");
        request.setDarkMode(true);

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updatePreferences(request);

        assertNotNull(result);
        assertEquals(request.getCurrency(), result.getCurrency());
        verify(settingsRepository, times(1)).save(userSettings);
    }
}
