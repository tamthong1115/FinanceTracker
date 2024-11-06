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
}

export interface UserSettings {
  id?: number;
  userId?: number;
  profile: UserProfile;
  notifications: NotificationSettings;
  preferences: Preferences;
}

export interface UpdateProfileRequest {
  name: string;
  phone: string;
  address: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

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
