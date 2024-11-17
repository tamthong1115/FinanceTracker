import React from "react";
import { Loader2, Save } from "lucide-react";
import { NotificationSettings as NotificationSettingsType } from "../../../types/settings";

interface NotificationSettingsProps {
  notifications?: NotificationSettingsType;
  onUpdate: (data: NotificationSettingsType) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof NotificationSettingsType, value: boolean) => void;
}

const defaultNotifications: NotificationSettingsType = {
  emailNotifications: true,
  budgetAlerts: true,
  transactionNotifications: true,
};

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  notifications = defaultNotifications,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(notifications);
  };

  // Use notifications prop if available, otherwise use default values
  const currentNotifications = {
    ...defaultNotifications,
    ...notifications,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Thông báo</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo Email</h4>
            <p className="text-sm text-gray-500">Nhận thông báo qua email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.emailNotifications}
              onChange={(e) => onChange("emailNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo ngân sách</h4>
            <p className="text-sm text-gray-500">
              Thông báo khi gần đến hạn mức
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.budgetAlerts}
              onChange={(e) => onChange("budgetAlerts", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo giao dịch</h4>
            <p className="text-sm text-gray-500">
              Thông báo khi có giao dịch mới
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.transactionNotifications}
              onChange={(e) =>
                onChange("transactionNotifications", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang lưu...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Lưu thay đổi
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NotificationSettings;
