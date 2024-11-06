package com.tamthong.finance_tracker_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSettingsDTO {
    private Long id;
    private Long userId;

    // Profile
    private String name;
    private String email;
    private String phone;
    private String address;

    // Notifications
    private Boolean emailNotifications;
    private Boolean budgetAlerts;
    private Boolean transactionNotifications;

    // Preferences
    private String currency;
    private Integer fiscalMonthStartDay;
    private String dateFormat;
    private Boolean darkMode;
}
