import React from "react";
import { Loader2, Save } from "lucide-react";
import { Preferences } from "../../../types/settings";

interface PreferencesSettingsProps {
  preferences: Preferences;
  onUpdate: (data: Preferences) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof Preferences, value: any) => void;
}

const PreferencesSettings: React.FC<PreferencesSettingsProps> = ({
  preferences,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Tùy chọn</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Đơn vị tiền tệ
          </label>
          <select
            value={preferences.currency}
            onChange={(e) => onChange("currency", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="VND">VND - Việt Nam Đồng</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngày bắt đầu tháng tài chính
          </label>
          <select
            value={preferences.fiscalMonthStartDay}
            onChange={(e) =>
              onChange("fiscalMonthStartDay", parseInt(e.target.value))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[1, 5, 10, 15, 20, 25, 28].map((day) => (
              <option key={day} value={day}>
                Ngày {day}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Định dạng ngày
          </label>
          <select
            value={preferences.dateFormat}
            onChange={(e) => onChange("dateFormat", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <h4 className="font-medium">Chế độ tối</h4>
            <p className="text-sm text-gray-500">Bật/tắt giao diện tối</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.darkMode}
              onChange={(e) => onChange("darkMode", e.target.checked)}
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

export default PreferencesSettings;
