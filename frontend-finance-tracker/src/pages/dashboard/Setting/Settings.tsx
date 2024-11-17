import React, { useState, useEffect } from "react";
import { Card } from "../../../components/common/ui/card";
import { Loader2 } from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";
import { toast } from "react-toastify";
import {
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

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const {
    loading,
    error,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateNotifications,
    updatePreferences,
    handleProfileChange,
    handleNotificationsChange,
    handlePreferencesChange,
    currentProfile,
    currentNotifications,
    currentPreferences,
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

  const handleProfileUpdate = async (profileData: UserProfile) => {
    try {
      setIsSaving(true);
      await updateProfile(profileData);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSecurityUpdate = async (data: UpdatePasswordRequest) => {
    try {
      setIsSaving(true);
      await updatePassword(data);
      toast.success("Password updated successfully");
    } catch (err) {
      toast.error("Failed to update password");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationsUpdate = async (data: NotificationSettingsType) => {
    try {
      setIsSaving(true);
      await updateNotifications(data);
      toast.success("Notifications updated successfully");
    } catch (err) {
      toast.error("Failed to update notifications");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreferencesUpdate = async (data: Preferences) => {
    try {
      setIsSaving(true);
      await updatePreferences(data);
      toast.success("Preferences updated successfully");
    } catch (err) {
      toast.error("Failed to update preferences");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-600 bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold">Error loading settings</h3>
          <p>{error}</p>
          <button
            onClick={() => fetchSettings()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
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
            {activeTab === "profile" && (
              <ProfileSettings
                profile={currentProfile()}
                onUpdate={handleProfileUpdate}
                onChange={handleProfileChange}
                isSaving={isSaving}
              />
            )}

            {activeTab === "security" && (
              <SecuritySettings
                onUpdate={handleSecurityUpdate}
                isSaving={isSaving}
              />
            )}

            {activeTab === "notifications" && (
              <NotificationSettings
                notifications={currentNotifications()}
                onUpdate={handleNotificationsUpdate}
                onChange={handleNotificationsChange}
                isSaving={isSaving}
              />
            )}

            {activeTab === "preferences" && (
              <PreferencesSettings
                preferences={currentPreferences()}
                onUpdate={handlePreferencesUpdate}
                onChange={handlePreferencesChange}
                isSaving={isSaving}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
