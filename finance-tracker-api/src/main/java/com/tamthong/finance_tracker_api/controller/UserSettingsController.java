package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.service.UserSettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserSettingsController {
    private final UserSettingsService settingsService;

    @GetMapping
    public ResponseEntity<UserSettingsDTO> getCurrentSettings() {
        UserSettingsDTO settings = settingsService.getCurrentUserSettings();
        return ResponseEntity.ok(settings);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserSettingsDTO> updateProfile(@RequestBody UpdateProfileRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updateProfile(request);
        return ResponseEntity.ok(updatedSettings);
    }

    @PutMapping("/password")
    public ResponseEntity<Void> updatePassword(@RequestBody UpdatePasswordRequest request) {
        settingsService.updatePassword(request);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/notifications")
    public ResponseEntity<UserSettingsDTO> updateNotifications(@RequestBody NotificationSettingsRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updateNotificationSettings(request);
        return ResponseEntity.ok(updatedSettings);
    }

    @PutMapping("/preferences")
    public ResponseEntity<UserSettingsDTO> updatePreferences(@RequestBody PreferencesRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updatePreferences(request);
        return ResponseEntity.ok(updatedSettings);
    }
}
