package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.NotificationSettingsDTO;
import com.tamthong.finance_tracker_api.dto.PreferencesDTO;
import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.service.UserSettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class SettingsController {
    private final UserSettingsService settingsService;

    @GetMapping
    public ResponseEntity<UserSettingsDTO> getUserSettings() {
        return ResponseEntity.ok(settingsService.getCurrentUserSettings());
    }

    @PutMapping
    public ResponseEntity<UserSettingsDTO> updateUserSettings(@RequestBody UserSettingsDTO settings) {
        return ResponseEntity.ok(settingsService.updateUserSettings(settings));
    }

    @PutMapping("/notifications")
    public ResponseEntity<UserSettingsDTO> updateNotificationSettings(
            @RequestBody NotificationSettingsDTO settings) {
        return ResponseEntity.ok(settingsService.updateNotificationSettings(settings));
    }

    @PutMapping("/preferences")
    public ResponseEntity<UserSettingsDTO> updatePreferences(
            @RequestBody PreferencesDTO preferences) {
        return ResponseEntity.ok(settingsService.updatePreferences(preferences));
    }
}
