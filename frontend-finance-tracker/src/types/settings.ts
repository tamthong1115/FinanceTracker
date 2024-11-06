export interface UserSettingsResponse {
  id: number;
  userId: number;
  // Profile
  name: string;
  email: string;
  phone: string;
  address: string;
  // Notifications
  emailNotifications: boolean;
  budgetAlerts: boolean;
  transactionNotifications: boolean;
  // Preferences
  currency: string | null;
  fiscalMonthStartDay: number | null;
  dateFormat: string | null;
  darkMode: boolean;
  // Metadata
  createdAt?: string;
  updatedAt?: string;
}

// Grouped interfaces for UI organization
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  budgetAlerts: boolean;
  transactionNotifications: boolean;
}

export interface Preferences {
  currency: string;
  fiscalMonthStartDay: number;
  dateFormat: string;
  darkMode: boolean;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// Default values
export const DEFAULT_SETTINGS: UserSettingsResponse = {
  id: 0,
  userId: 0,
  name: "",
  email: "",
  phone: "",
  address: "",
  emailNotifications: true,
  budgetAlerts: true,
  transactionNotifications: true,
  currency: "VND",
  fiscalMonthStartDay: 1,
  dateFormat: "DD/MM/YYYY",
  darkMode: false,
};

// Utility function to transform API response to grouped format
export const transformResponseToGrouped = (response: UserSettingsResponse) => {
  return {
    profile: {
      name: response.name,
      email: response.email,
      phone: response.phone,
      address: response.address,
    },
    notifications: {
      emailNotifications: response.emailNotifications,
      budgetAlerts: response.budgetAlerts,
      transactionNotifications: response.transactionNotifications,
    },
    preferences: {
      currency: response.currency || "VND",
      fiscalMonthStartDay: response.fiscalMonthStartDay || 1,
      dateFormat: response.dateFormat || "DD/MM/YYYY",
      darkMode: response.darkMode,
    },
  };
};

// Utility function to transform grouped format back to API format
export const transformGroupedToResponse = (
  grouped: {
    profile: UserProfile;
    notifications: NotificationSettings;
    preferences: Preferences;
  },
  currentSettings: UserSettingsResponse
): UserSettingsResponse => {
  return {
    ...currentSettings,
    // Profile
    name: grouped.profile.name,
    email: grouped.profile.email,
    phone: grouped.profile.phone,
    address: grouped.profile.address,
    // Notifications
    emailNotifications: grouped.notifications.emailNotifications,
    budgetAlerts: grouped.notifications.budgetAlerts,
    transactionNotifications: grouped.notifications.transactionNotifications,
    // Preferences
    currency: grouped.preferences.currency,
    fiscalMonthStartDay: grouped.preferences.fiscalMonthStartDay,
    dateFormat: grouped.preferences.dateFormat,
    darkMode: grouped.preferences.darkMode,
  };
};

// Constants
export const CURRENCY_OPTIONS = [
  { value: "VND", label: "VND - Việt Nam Đồng" },
  { value: "USD", label: "USD - US Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "JPY", label: "JPY - Japanese Yen" },
];

export const DATE_FORMAT_OPTIONS = [
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
];

export const FISCAL_MONTH_START_OPTIONS = Array.from({ length: 28 }, (_, i) => ({
  value: i + 1,
  label: `Ngày ${i + 1}`,
}));
