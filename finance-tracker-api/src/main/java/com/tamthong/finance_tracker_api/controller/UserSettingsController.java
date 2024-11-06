package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.NotificationSettingsRequest;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.PreferencesRequest;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.UpdatePasswordRequest;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.UpdateProfileRequest;
import com.tamthong.finance_tracker_api.service.UserSettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class UserSettingsController {
    private final UserSettingsService settingsService;

    @GetMapping
    public ResponseEntity<UserSettingsDTO> getCurrentSettings() {
        return ResponseEntity.ok(settingsService.getCurrentUserSettings());
    }

    @PutMapping("/profile")
    public ResponseEntity<UserSettingsDTO> updateProfile(@RequestBody UpdateProfileRequest request) {
        return ResponseEntity.ok(settingsService.updateProfile(request));
    }

    @PutMapping("/password")
    public ResponseEntity<Void> updatePassword(@RequestBody UpdatePasswordRequest request) {
        settingsService.updatePassword(request);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/notifications")
    public ResponseEntity<UserSettingsDTO> updateNotifications(@RequestBody NotificationSettingsRequest request) {
        return ResponseEntity.ok(settingsService.updateNotificationSettings(request));
    }

    @PutMapping("/preferences")
    public ResponseEntity<UserSettingsDTO> updatePreferences(@RequestBody PreferencesRequest request) {
        return ResponseEntity.ok(settingsService.updatePreferences(request));
    }
}
