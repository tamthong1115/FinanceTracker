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

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.getCurrentSettings();
      setSettings(response.data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch settings";
      setError(errorMessage);
      throw err; // Allow component to handle the error
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = async (data: UpdateProfileRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await settingsApi.updateProfile(data);
      setSettings(response.data);
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
      setSettings(response.data);
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update notification settings";
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
      setSettings(response.data);
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
