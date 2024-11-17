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
      const { data } = await axiosInstance.get<UserSettingsResponse>(`${BASE_URL}`);
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
      return {
        name: updatedSettings.name,
        email: updatedSettings.email,
        phone: updatedSettings.phone,
        address: updatedSettings.address
      };
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setLoading(true);
      await axiosInstance.put(`${BASE_URL}/password`, data);
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
      return {
        emailNotifications: updatedSettings.emailNotifications,
        budgetAlerts: updatedSettings.budgetAlerts,
        transactionNotifications: updatedSettings.transactionNotifications
      };
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
      return {
        currency: updatedSettings.currency || "VND",
        fiscalMonthStartDay: updatedSettings.fiscalMonthStartDay || 1,
        dateFormat: updatedSettings.dateFormat || "DD/MM/YYYY",
        darkMode: updatedSettings.darkMode
      };
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setSettings((prev: UserSettingsResponse) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationsChange = (
    field: keyof NotificationSettings,
    value: boolean
  ) => {
    setSettings((prev: UserSettingsResponse) => ({
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
    // Data getters
    currentProfile: () => ({
      name: settings.name,
      email: settings.email,
      phone: settings.phone,
      address: settings.address
    }),
    currentNotifications: () => ({
      emailNotifications: settings.emailNotifications,
      budgetAlerts: settings.budgetAlerts,
      transactionNotifications: settings.transactionNotifications
    }),
    currentPreferences: () => ({
      currency: settings.currency || "VND",
      fiscalMonthStartDay: settings.fiscalMonthStartDay || 1,
      dateFormat: settings.dateFormat || "DD/MM/YYYY",
      darkMode: settings.darkMode
    }),
  };
};