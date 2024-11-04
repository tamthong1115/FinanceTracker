package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class UserSettingsDTO {
    private Long id;
    private Long userId;
    private String currency;
    private Integer fiscalMonthStartDay;
    private String dateFormat;
    private Boolean darkMode;
    private Boolean emailNotifications;
    private Boolean budgetAlerts;
    private Boolean transactionNotifications;
}
