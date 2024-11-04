import axiosInstance from "./api/axiosConfig";
import {
  UserSettings,
  UpdateProfileRequest,
  UpdatePasswordRequest,
  NotificationSettings,
  Preferences,
  UpdateSettingsRequest,
} from "../types/settings";

export const settingsApi = {
  getCurrentSettings: () => axiosInstance.get<UserSettings>("/settings"),

  updateProfile: (data: UpdateProfileRequest) =>
    axiosInstance.put<UserSettings>("/settings/profile", data),

  updatePassword: (data: UpdatePasswordRequest) =>
    axiosInstance.put("/settings/password", data),

  updateNotifications: (data: NotificationSettings) =>
    axiosInstance.put<UserSettings>("/settings/notifications", data),

  updatePreferences: (data: Preferences) =>
    axiosInstance.put<UserSettings>("/settings/preferences", data),
};
