export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface SecuritySettings {
  currentPassword: string;
  newPassword: string;
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

export interface UserSettings {
  id?: number;
  userId?: number;
  profile: UserProfile;
  notifications: NotificationSettings;
  preferences: Preferences;
}

// Request types
export interface UpdateProfileRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateSettingsRequest {
  type: "profile" | "password" | "notifications" | "preferences";
  data:
    | UpdateProfileRequest
    | UpdatePasswordRequest
    | NotificationSettings
    | Preferences;
}
