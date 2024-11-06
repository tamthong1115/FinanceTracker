package com.tamthong.finance_tracker_api.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_settings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Profile settings
    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    // Notification settings
    @Column(name = "email_notifications")
    private Boolean emailNotifications = true;

    @Column(name = "budget_alerts")
    private Boolean budgetAlerts = true;

    @Column(name = "transaction_notifications")
    private Boolean transactionNotifications = true;

    // Preferences
    @Column(name = "currency")
    private String currency = "VND";

    @Column(name = "fiscal_month_start_day")
    private Integer fiscalMonthStartDay = 1;

    @Column(name = "date_format")
    private String dateFormat = "DD/MM/YYYY";

    @Column(name = "dark_mode")
    private Boolean darkMode = false;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
