package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class NotificationSettingsDTO {
    private Boolean emailNotifications;
    private Boolean budgetAlerts;
    private Boolean transactionNotifications;
}
