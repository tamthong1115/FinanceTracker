import axiosInstance from "../config/axiosConfig";
import {
  UserSettingsResponse,
  UserProfile,
  NotificationSettings,
  Preferences,
  DEFAULT_SETTINGS,
  UpdatePasswordRequest,
} from "../types/settings";

const BASE_URL = "/settings";

export const settingsApi = {
  getCurrentSettings: async (): Promise<UserSettingsResponse> => {
    try {
      const response = await axiosInstance.get<UserSettingsResponse>(BASE_URL);
      console.log("Fetched settings:", response.data);
      return {
        ...DEFAULT_SETTINGS,
        ...response.data,
      };
    } catch (error) {
      console.error("Error fetching settings:", error);
      throw error;
    }
  },

  updateProfile: async (
    data: UserProfile,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/profile`,
        updateData
      );
      console.log("Updated profile:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },

  updatePassword: async (data: UpdatePasswordRequest): Promise<void> => {
    try {
      await axiosInstance.put(`${BASE_URL}/password`, data);
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  },

  updateNotifications: async (
    data: NotificationSettings,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/notifications`,
        updateData
      );
      console.log("Updated notifications:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating notifications:", error);
      throw error;
    }
  },

  updatePreferences: async (
    data: Preferences,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/preferences`,
        updateData
      );
      console.log("Updated preferences:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating preferences:", error);
      throw error;
    }
  },

  // Utility functions
  extractProfile: (settings: UserSettingsResponse): UserProfile => ({
    name: settings.name,
    email: settings.email,
    phone: settings.phone,
    address: settings.address,
  }),

  extractNotifications: (
    settings: UserSettingsResponse
  ): NotificationSettings => ({
    emailNotifications: settings.emailNotifications,
    budgetAlerts: settings.budgetAlerts,
    transactionNotifications: settings.transactionNotifications,
  }),

  extractPreferences: (settings: UserSettingsResponse): Preferences => ({
    currency: settings.currency || "VND",
    fiscalMonthStartDay: settings.fiscalMonthStartDay || 1,
    dateFormat: settings.dateFormat || "DD/MM/YYYY",
    darkMode: settings.darkMode,
  }),
};

export default settingsApi;
