package com.tamthong.finance_tracker_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSettingsDTO {
    private Long id;
    private Long userId;
    
    // Profile fields
    private String name;
    private String email;
    private String phone;
    private String address;
    
    // Notification fields
    private Boolean emailNotifications;
    private Boolean budgetAlerts;
    private Boolean transactionNotifications;
    
    // Preferences fields
    private String currency;
    private Integer fiscalMonthStartDay;
    private String dateFormat;
    private Boolean darkMode;
    
    // Add metadata fields if needed
    private String createdAt;
    private String updatedAt;
}
