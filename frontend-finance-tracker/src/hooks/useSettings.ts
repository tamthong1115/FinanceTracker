import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { settingsApi } from "../services/settingsService";
import {
  UserSettings,
  UpdateProfileRequest,
  UpdatePasswordRequest,
  NotificationSettings,
  Preferences,
} from "../types/settings";

const defaultSettings: UserSettings = {
  profile: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  notifications: {
    emailNotifications: true,
    budgetAlerts: true,
    transactionNotifications: true,
  },
  preferences: {
    currency: "VND",
    fiscalMonthStartDay: 1,
    dateFormat: "DD/MM/YYYY",
    darkMode: false,
  },
};

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.getCurrentSettings();

      // Merge with default settings to ensure all properties exist
      setSettings({
        ...defaultSettings,
        ...response.data,
      });
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch settings";
      setError(errorMessage);
      // Don't reset settings on error, keep default values
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = async (data: UpdateProfileRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.updateProfile(data);
      setSettings((prev) => ({
        ...prev,
        profile: response.data.profile,
      }));
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update profile";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setLoading(true);
      setError(null);
      await settingsApi.updatePassword(data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update password";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateNotifications = async (data: NotificationSettings) => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.updateNotifications(data);
      setSettings((prev) => ({
        ...prev,
        notifications: response.data.notifications,
      }));
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update notifications";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (data: Preferences) => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.updatePreferences(data);
      setSettings((prev) => ({
        ...prev,
        preferences: response.data.preferences,
      }));
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update preferences";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    settings,
    loading,
    error,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateNotifications,
    updatePreferences,
  };
};
