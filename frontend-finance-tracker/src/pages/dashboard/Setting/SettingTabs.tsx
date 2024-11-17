import React from "react";
import { User, Lock, Bell, Settings as SettingsIcon } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

interface SettingTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  {
    id: "profile",
    label: "Thông tin cá nhân",
    icon: User,
    description: "Cập nhật thông tin cá nhân của bạn",
  },
  {
    id: "security",
    label: "Bảo mật",
    icon: Lock,
    description: "Thay đổi mật khẩu và cài đặt bảo mật",
  },
  {
    id: "notifications",
    label: "Thông báo",
    icon: Bell,
    description: "Quản lý cài đặt thông báo",
  },
  {
    id: "preferences",
    label: "Tùy chọn",
    icon: SettingsIcon,
    description: "Tùy chỉnh giao diện và các tùy chọn khác",
  },
];

const SettingTabs: React.FC<SettingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full md:w-64 space-y-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors relative group
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : ""}`} />
            <div>
              <span className="font-medium block">{tab.label}</span>
              <span className="text-sm text-gray-500 hidden group-hover:block">
                {tab.description}
              </span>
            </div>

            {isActive && (
              <div className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-r" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SettingTabs;
