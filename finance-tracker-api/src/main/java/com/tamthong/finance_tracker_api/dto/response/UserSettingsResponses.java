package com.tamthong.finance_tracker_api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class UserSettingsResponses {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ProfileResponse {
        private String name;
        private String email;
        private String phone;
        private String address;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class NotificationSettingsResponse {
        private Boolean emailNotifications;
        private Boolean budgetAlerts;
        private Boolean transactionNotifications;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PreferencesResponse {
        private String currency;
        private Integer fiscalMonthStartDay;
        private String dateFormat;
        private Boolean darkMode;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserSettingsResponse {
        private Long id;
        private ProfileResponse profile;
        private NotificationSettingsResponse notifications;
        private PreferencesResponse preferences;
    }
}
