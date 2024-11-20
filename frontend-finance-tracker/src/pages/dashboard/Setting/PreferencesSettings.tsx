import React from "react";
import { Loader2, Save } from "lucide-react";
import {
  Preferences,
  CURRENCY_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FISCAL_MONTH_START_OPTIONS,
} from "../../../types/settings";

interface PreferencesSettingsProps {
  preferences?: Preferences;
  onUpdate: (data: Preferences) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof Preferences, value: Preferences[keyof Preferences]) => void;
}

const defaultPreferences: Preferences = {
  currency: "VND",
  fiscalMonthStartDay: 1,
  dateFormat: "DD/MM/YYYY",
  darkMode: false,
};

const PreferencesSettings: React.FC<PreferencesSettingsProps> = ({
  preferences = defaultPreferences,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(preferences);
  };

  // Use preferences prop if available, otherwise use default values
  const currentPreferences = preferences || defaultPreferences;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Tùy chọn</h3>

      <div className="space-y-4">
        {/* Currency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Đơn vị tiền tệ
          </label>
          <select
            value={currentPreferences.currency}
            onChange={(e) => onChange("currency", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {CURRENCY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fiscal Month Start Day */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngày bắt đầu tháng tài chính
          </label>
          <select
            value={currentPreferences.fiscalMonthStartDay}
            onChange={(e) =>
              onChange("fiscalMonthStartDay", parseInt(e.target.value))
            }
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {FISCAL_MONTH_START_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Định dạng ngày
          </label>
          <select
            value={currentPreferences.dateFormat}
            onChange={(e) => onChange("dateFormat", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {DATE_FORMAT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentPreferences.darkMode}
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
