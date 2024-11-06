import React from "react";
import { User, Lock, Bell, DollarSign } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SettingTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  { id: "profile", label: "Thông tin cá nhân", icon: User },
  { id: "security", label: "Bảo mật", icon: Lock },
  { id: "notifications", label: "Thông báo", icon: Bell },
  { id: "preferences", label: "Tùy chọn", icon: DollarSign },
];

const SettingTabs: React.FC<SettingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full md:w-64 space-y-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-left 
              ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50"
              }`}
          >
            <Icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SettingTabs;
