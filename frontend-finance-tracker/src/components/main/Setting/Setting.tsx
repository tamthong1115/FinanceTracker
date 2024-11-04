import React, { useState, useEffect } from "react";
import { Card } from "../../ui/card";
import { User, Lock, Bell, DollarSign, Save, Loader2 } from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";
import { toast } from "react-toastify";
import {
  UserProfile,
  NotificationSettings,
  Preferences,
  UpdatePasswordRequest,
} from "../../../types/settings";

interface FormData {
  profile: UserProfile;
  security: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  notifications: NotificationSettings;
  preferences: Preferences;
}

const defaultFormData: FormData = {
  profile: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  security: {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
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

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        await fetchSettings();
      } catch (err) {
        console.error("Failed to fetch settings:", err);
        toast.error("Failed to load settings. Please try again.");
      }
    };
    loadSettings();
  }, [fetchSettings]);

  useEffect(() => {
    if (settings) {
      setFormData((prev) => ({
        ...prev,
        profile: settings.profile || defaultFormData.profile,
        notifications: settings.notifications || defaultFormData.notifications,
        preferences: settings.preferences || defaultFormData.preferences,
      }));
    }
  }, [settings]);

  const tabs = [
    { id: "profile", label: "Thông tin cá nhân", icon: User },
    { id: "security", label: "Bảo mật", icon: Lock },
    { id: "notifications", label: "Thông báo", icon: Bell },
    { id: "preferences", label: "Tùy chọn", icon: DollarSign },
  ];

  const handleInputChange = (
    section: keyof FormData,
    field: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    type: "profile" | "security" | "notifications" | "preferences"
  ) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      switch (type) {
        case "profile":
          await updateProfile(formData.profile);
          toast.success("Thông tin cá nhân đã được cập nhật");
          break;
        case "security":
          if (
            formData.security.newPassword !== formData.security.confirmPassword
          ) {
            toast.error("Mật khẩu không khớp");
            return;
          }
          await updatePassword({
            currentPassword: formData.security.currentPassword,
            newPassword: formData.security.newPassword,
          });
          setFormData((prev) => ({
            ...prev,
            security: {
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            },
          }));
          toast.success("Mật khẩu đã được cập nhật");
          break;
        case "notifications":
          await updateNotifications(formData.notifications);
          toast.success("Cài đặt thông báo đã được cập nhật");
          break;
        case "preferences":
          await updatePreferences(formData.preferences);
          toast.success("Tùy chọn đã được cập nhật");
          break;
      }
    } catch (err) {
      console.error(`Error updating ${type}:`, err);
      toast.error(`Failed to update ${type}. Please try again.`);
    } finally {
      setIsSaving(false);
    }
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
        <Card className="p-6 bg-red-50 border-red-100">
          <div className="text-red-600">
            <h3 className="text-lg font-semibold mb-2">
              Error Loading Settings
            </h3>
            <p>{error}</p>
            <button
              onClick={() => fetchSettings()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Try Again
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
        {/* Tabs */}
        <div className="w-full md:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-left ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          <Card className="p-6">
            {activeTab === "profile" && (
              <form onSubmit={(e) => handleSubmit(e, "profile")}>
                <h3 className="text-lg font-semibold mb-4">Thông tin cá nhân</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      value={formData.profile.name}
                      onChange={(e) =>
                        handleInputChange("profile", "name", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.profile.email}
                      onChange={(e) =>
                        handleInputChange("profile", "email", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Add other profile fields */}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Similar form sections for security, notifications, and preferences */}
            {/* ... */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
