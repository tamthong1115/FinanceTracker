import axiosInstance from "./api/axiosConfig";
import {
  UserSettings,
  UpdateProfileRequest,
  UpdatePasswordRequest,
  NotificationSettings,
  Preferences,
} from "../types/settings";

const BASE_URL = "/settings";

export const settingsApi = {
  getCurrentSettings: () => axiosInstance.get<UserSettings>(`${BASE_URL}`),

  updateProfile: (data: UpdateProfileRequest) =>
    axiosInstance.put<UserSettings>(`${BASE_URL}/profile`, data),

  updatePassword: (data: UpdatePasswordRequest) =>
    axiosInstance.put(`${BASE_URL}/password`, data),

  updateNotifications: (data: NotificationSettings) =>
    axiosInstance.put<UserSettings>(`${BASE_URL}/notifications`, data),

  updatePreferences: (data: Preferences) =>
    axiosInstance.put<UserSettings>(`${BASE_URL}/preferences`, data),
};

// Utility functions for formatting
export const formatCurrency = (amount: number, currency: string = "VND") => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(amount);
};

export const formatDate = (
  date: Date | string,
  format: string = "DD/MM/YYYY"
) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  switch (format) {
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    default:
      return d.toLocaleDateString();
  }
};
