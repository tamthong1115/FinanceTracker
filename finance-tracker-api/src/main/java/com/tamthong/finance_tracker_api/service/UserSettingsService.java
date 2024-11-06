package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.repository.UserSettingsRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserSettingsService {
    private final UserSettingsRepository settingsRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserSettingsDTO getCurrentUserSettings() {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));
        return mapToDTO(settings);
    }

    public UserSettingsDTO updateProfile(UpdateProfileRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setName(request.getName());
        settings.setPhone(request.getPhone());
        settings.setAddress(request.getAddress());

        currentUser.setUsername(request.getName());
        userService.save(currentUser); // Save user changes

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    public void updatePassword(UpdatePasswordRequest request) {
        User currentUser = userService.getCurrentUser();

        if (!passwordEncoder.matches(request.getCurrentPassword(), currentUser.getPassword())) {
            throw new BadCredentialsException("Current password is incorrect");
        }

        currentUser.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userService.save(currentUser);
    }

    public UserSettingsDTO updateNotificationSettings(NotificationSettingsRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setEmailNotifications(request.getEmailNotifications());
        settings.setBudgetAlerts(request.getBudgetAlerts());
        settings.setTransactionNotifications(request.getTransactionNotifications());

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    public UserSettingsDTO updatePreferences(PreferencesRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setCurrency(request.getCurrency());
        settings.setFiscalMonthStartDay(request.getFiscalMonthStartDay());
        settings.setDateFormat(request.getDateFormat());
        settings.setDarkMode(request.getDarkMode());

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    private UserSettings createDefaultSettings(User user) {
        UserSettings settings = UserSettings.builder()
                .user(user)
                .name(user.getUsername())
                .emailNotifications(true)
                .budgetAlerts(true)
                .transactionNotifications(true)
                .currency("VND")
                .fiscalMonthStartDay(1)
                .dateFormat("DD/MM/YYYY")
                .darkMode(false)
                .build();

        return settingsRepository.save(settings);
    }

    private UserSettingsDTO mapToDTO(UserSettings settings) {
        return UserSettingsDTO.builder()
                .id(settings.getId())
                .userId(settings.getUser().getId())

                .name(settings.getName())
                .email(settings.getUser().getEmail())
                .phone(settings.getPhone())
                .address(settings.getAddress())

                .emailNotifications(settings.getEmailNotifications())
                .budgetAlerts(settings.getBudgetAlerts())
                .transactionNotifications(settings.getTransactionNotifications())

                .currency(settings.getCurrency())
                .fiscalMonthStartDay(settings.getFiscalMonthStartDay())
                .dateFormat(settings.getDateFormat())
                .darkMode(settings.getDarkMode())

                .createdAt(settings.getCreatedAt().toString())
                .updatedAt(settings.getUpdatedAt() != null ? settings.getUpdatedAt().toString()
                        : LocalDateTime.now().toString())

                .build();
    }
}
