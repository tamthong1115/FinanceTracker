package com.tamthong.finance_tracker_api.constants;

public class SettingsConstants {
    // Currency
    public static final String DEFAULT_CURRENCY = "VND";
    public static final String[] SUPPORTED_CURRENCIES = { "VND", "USD", "EUR", "JPY" };

    // Date Format
    public static final String DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
    public static final String[] SUPPORTED_DATE_FORMATS = {
            "DD/MM/YYYY",
            "MM/DD/YYYY",
            "YYYY-MM-DD"
    };

    // Fiscal Month
    public static final int DEFAULT_FISCAL_MONTH_START_DAY = 1;
    public static final int MIN_FISCAL_MONTH_START_DAY = 1;
    public static final int MAX_FISCAL_MONTH_START_DAY = 28;

    // Default settings
    public static final boolean DEFAULT_EMAIL_NOTIFICATIONS = true;
    public static final boolean DEFAULT_BUDGET_ALERTS = true;
    public static final boolean DEFAULT_TRANSACTION_NOTIFICATIONS = true;
    public static final boolean DEFAULT_DARK_MODE = false;

    private SettingsConstants() {
        // Private constructor to prevent instantiation
    }
}
