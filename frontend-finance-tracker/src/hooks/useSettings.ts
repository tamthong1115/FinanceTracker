import { useState, useCallback } from "react";
import { settingsApi } from "../services/settingsService";
import axiosInstance from "../config/axiosConfig";
import {
  UserSettingsResponse,
  DEFAULT_SETTINGS,
  UserProfile,
  NotificationSettings,
  Preferences,
  UpdatePasswordRequest,
} from "../types/settings";

const BASE_URL = "/api/settings";

export const useSettings = () => {
  const [settings, setSettings] =
    useState<UserSettingsResponse>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axiosInstance.get<UserSettingsResponse>(`${BASE_URL}/current`);
      console.log("Fetched settings in hook:", data);
      setSettings(data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch settings";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = async (profileData: UserProfile) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/profile`,
        profileData
      );
      console.log("Updated settings after profile update:", updatedSettings);
      setSettings(updatedSettings);
      return updatedSettings.profile;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setLoading(true);
      await axiosInstance.put(`${BASE_URL}/password`, data);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateNotifications = async (notificationData: NotificationSettings) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/notifications`,
        notificationData
      );
      console.log(
        "Updated settings after notifications update:",
        updatedSettings
      );
      setSettings(updatedSettings);
      return updatedSettings.notifications;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (preferencesData: Preferences) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/preferences`,
        preferencesData
      );
      console.log("Updated settings after preferences update:", updatedSettings);
      setSettings(updatedSettings);
      return updatedSettings.preferences;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setSettings((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleNotificationsChange = (
    field: keyof NotificationSettings,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value,
      },
    }));
  };

  const handlePreferencesChange = (field: keyof Preferences, value: any) => {
    setSettings((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value,
      },
    }));
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
    // Change handlers
    handleProfileChange,
    handleNotificationsChange,
    handlePreferencesChange,
    // Data getters
    currentProfile: () => settings.profile,
    currentNotifications: () => settings.notifications,
    currentPreferences: () => settings.preferences,
  };
};
