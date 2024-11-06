import React from "react";
import { Loader2, Save } from "lucide-react";
import { Preferences, CURRENCY_OPTIONS, DATE_FORMAT_OPTIONS, FISCAL_MONTH_START_OPTIONS } from "../../../types/settings";

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
        {/* Currency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Đơn vị tiền tệ
          </label>
          <select
            value={preferences.currency}
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
            value={preferences.fiscalMonthStartDay}
            onChange={(e) => onChange("fiscalMonthStartDay", parseInt(e.target.value))}
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
            value={preferences.dateFormat}
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
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
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
