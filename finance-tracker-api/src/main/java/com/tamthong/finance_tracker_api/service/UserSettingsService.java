package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.NotificationSettingsDTO;
import com.tamthong.finance_tracker_api.dto.PreferencesDTO;
import com.tamthong.finance_tracker_api.mapper.UserSettingsMapper;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.repository.UserSettingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserSettingsService {
    private final UserSettingsRepository settingsRepository;
    private final UserSettingsMapper settingsMapper;
    private final UserService userService;

    @Transactional
    public UserSettingsDTO getCurrentUserSettings() {
        Long userId = userService.getCurrentUserId();
        UserSettings settings = settingsRepository.findByUserId(userId)
                .orElseGet(() -> createDefaultSettings(userId));
        return settingsMapper.toDTO(settings);
    }

    @Transactional
    public UserSettingsDTO updateUserSettings(UserSettingsDTO settingsDTO) {
        Long userId = userService.getCurrentUserId();
        UserSettings settings = settingsRepository.findByUserId(userId)
                .orElseGet(() -> createDefaultSettings(userId));

        UserSettings updatedSettings = settingsMapper.toEntity(settingsDTO);
        updatedSettings.setId(settings.getId());
        updatedSettings.setUser(settings.getUser());

        UserSettings savedSettings = settingsRepository.save(updatedSettings);
        return settingsMapper.toDTO(savedSettings);
    }

    @Transactional
    public UserSettingsDTO updateNotificationSettings(NotificationSettingsDTO notificationSettings) {
        Long userId = userService.getCurrentUserId();
        UserSettings settings = settingsRepository.findByUserId(userId)
                .orElseGet(() -> createDefaultSettings(userId));

        settings.setEmailNotifications(notificationSettings.getEmailNotifications());
        settings.setBudgetAlerts(notificationSettings.getBudgetAlerts());
        settings.setTransactionNotifications(notificationSettings.getTransactionNotifications());

        UserSettings savedSettings = settingsRepository.save(settings);
        return settingsMapper.toDTO(savedSettings);
    }

    @Transactional
    public UserSettingsDTO updatePreferences(PreferencesDTO preferences) {
        Long userId = userService.getCurrentUserId();
        UserSettings settings = settingsRepository.findByUserId(userId)
                .orElseGet(() -> createDefaultSettings(userId));

        settings.setCurrency(preferences.getCurrency());
        settings.setFiscalMonthStartDay(preferences.getFiscalMonthStartDay());
        settings.setDateFormat(preferences.getDateFormat());
        settings.setDarkMode(preferences.getDarkMode());

        UserSettings savedSettings = settingsRepository.save(settings);
        return settingsMapper.toDTO(savedSettings);
    }

    @Transactional
    private UserSettings createDefaultSettings(Long userId) {
        UserSettings settings = new UserSettings();
        settings.setUser(userService.getCurrentUser());
        settings.setCurrency("VND");
        settings.setFiscalMonthStartDay(1);
        settings.setDateFormat("DD/MM/YYYY");
        settings.setDarkMode(false);
        settings.setEmailNotifications(true);
        settings.setBudgetAlerts(true);
        settings.setTransactionNotifications(true);
        return settingsRepository.save(settings);
    }
}
