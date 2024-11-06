import React, { useState, useEffect } from "react";
import { Card } from "../../ui/card";
import { Loader2 } from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";
import { toast } from "react-toastify";
import {
  UserSettings,
  UserProfile,
  NotificationSettings as NotificationSettingsType,
  Preferences,
  UpdatePasswordRequest,
} from "../../../types/settings";

import SettingTabs from "./SettingTabs";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import PreferencesSettings from "./PreferencesSettings";

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
  },
};

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [localSettings, setLocalSettings] =
    useState<UserSettings>(defaultSettings);

  const {
    settings,
    loading,
    error,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateNotifications,
    updatePreferences,
  } = useSettings();

  useEffect(() => {
    const loadSettings = async () => {
      try {
        await fetchSettings();
      } catch (err) {
        console.error("Failed to fetch settings:", err);
        toast.error("Failed to load settings");
      }
    };
    loadSettings();
  }, [fetchSettings]);

  useEffect(() => {
    if (settings) {
      setLocalSettings(settings);
    }
  }, [settings]);

  const handleProfileUpdate = async (profileData: UserProfile) => {
    try {
      setIsSaving(true);
      await updateProfile(profileData);
      setLocalSettings((prev) => ({
        ...prev,
        profile: profileData,
      }));
      toast.success("Cập nhật thông tin thành công");
    } catch (err) {
      toast.error("Không thể cập nhật thông tin");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSecurityUpdate = async (data: UpdatePasswordRequest) => {
    try {
      setIsSaving(true);
      await updatePassword(data);
      toast.success("Cập nhật mật khẩu thành công");
    } catch (err) {
      toast.error("Không thể cập nhật mật khẩu");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationsUpdate = async (data: NotificationSettingsType) => {
    try {
      setIsSaving(true);
      await updateNotifications(data);
      setLocalSettings((prev) => ({
        ...prev,
        notifications: data,
      }));
      toast.success("Cập nhật thông báo thành công");
    } catch (err) {
      toast.error("Không thể cập nhật thông báo");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreferencesUpdate = async (data: Preferences) => {
    try {
      setIsSaving(true);
      await updatePreferences(data);
      setLocalSettings((prev) => ({
        ...prev,
        preferences: data,
      }));
      toast.success("Cập nhật tùy chọn thành công");
    } catch (err) {
      toast.error("Không thể cập nhật tùy chọn");
    } finally {
      setIsSaving(false);
    }
  };

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setLocalSettings((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleNotificationsChange = (
    field: keyof NotificationSettingsType,
    value: boolean
  ) => {
    setLocalSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value,
      },
    }));
  };

  const handlePreferencesChange = (
    field: keyof Preferences,
    value: string | number
  ) => {
    setLocalSettings((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value,
      },
    }));
  };

  if (loading && !settings) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Card className="p-6 bg-red-50">
          <div className="text-red-600">
            <h3 className="text-lg font-semibold mb-2">Lỗi tải cài đặt</h3>
            <p>{error}</p>
            <button
              onClick={() => fetchSettings()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Thử lại
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Cài đặt</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <SettingTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1">
          <Card className="p-6">
            {activeTab === "profile" && settings && (
              <ProfileSettings
                profile={localSettings.profile}
                onUpdate={handleProfileUpdate}
                isSaving={isSaving}
                onChange={handleProfileChange}
              />
            )}

            {activeTab === "security" && (
              <SecuritySettings
                onUpdate={handleSecurityUpdate}
                isSaving={isSaving}
              />
            )}

            {activeTab === "notifications" && settings && (
              <NotificationSettings
                notifications={localSettings.notifications}
                onUpdate={handleNotificationsUpdate}
                isSaving={isSaving}
                onChange={handleNotificationsChange}
              />
            )}

            {activeTab === "preferences" && settings && (
              <PreferencesSettings
                preferences={localSettings.preferences}
                onUpdate={handlePreferencesUpdate}
                isSaving={isSaving}
                onChange={handlePreferencesChange}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
