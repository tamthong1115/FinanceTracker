package com.tamthong.finance_tracker_api.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserSettingsRequests {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdatePasswordRequest {
        @NotBlank(message = "Current password is required")
        private String currentPassword;

        @NotBlank(message = "New password is required")
        @Size(min = 6, message = "Password must be at least 6 characters long")
        private String newPassword;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdateProfileRequest {
        @NotBlank(message = "Name is required")
        private String name;

        private String phone;
        private String address;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class NotificationSettingsRequest {
        @NotNull(message = "Email notifications setting is required")
        private Boolean emailNotifications;

        @NotNull(message = "Budget alerts setting is required")
        private Boolean budgetAlerts;

        @NotNull(message = "Transaction notifications setting is required")
        private Boolean transactionNotifications;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PreferencesRequest {
        private String currency;
        private Integer fiscalMonthStartDay;
        private String dateFormat;
        private Boolean darkMode;
    }
}
