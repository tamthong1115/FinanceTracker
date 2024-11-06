// src/hooks/useSettings.ts
import { useState, useCallback } from "react";
import { settingsApi } from "../services/settingsService";
import {
  UserSettingsResponse,
  DEFAULT_SETTINGS,
  UserProfile,
  NotificationSettings,
  Preferences,
  UpdatePasswordRequest,
} from "../types/settings";

export const useSettings = () => {
  const [settings, setSettings] =
    useState<UserSettingsResponse>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await settingsApi.getCurrentSettings();
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
      const updatedSettings = await settingsApi.updateProfile(
        profileData,
        settings
      );
      console.log("Updated settings after profile update:", updatedSettings);
      setSettings(updatedSettings);
      return settingsApi.extractProfile(updatedSettings);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setLoading(true);
      await settingsApi.updatePassword(data);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateNotifications = async (notificationData: NotificationSettings) => {
    try {
      setLoading(true);
      const updatedSettings = await settingsApi.updateNotifications(
        notificationData,
        settings
      );
      console.log(
        "Updated settings after notifications update:",
        updatedSettings
      );
      setSettings(updatedSettings);
      return settingsApi.extractNotifications(updatedSettings);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (preferencesData: Preferences) => {
    try {
      setLoading(true);
      const updatedSettings = await settingsApi.updatePreferences(
        preferencesData,
        settings
      );
      console.log("Updated settings after preferences update:", updatedSettings);
      setSettings(updatedSettings);
      return settingsApi.extractPreferences(updatedSettings);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationsChange = (
    field: keyof NotificationSettings,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePreferencesChange = (field: keyof Preferences, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
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
    currentProfile: () => settingsApi.extractProfile(settings),
    currentNotifications: () => settingsApi.extractNotifications(settings),
    currentPreferences: () => settingsApi.extractPreferences(settings),
  };
};
