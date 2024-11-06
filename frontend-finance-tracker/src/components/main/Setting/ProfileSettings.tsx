import React from "react";
import { Loader2, Save } from "lucide-react";
import { UserProfile } from "../../../types/settings";

interface ProfileSettingsProps {
  profile?: UserProfile;
  onUpdate: (data: UserProfile) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof UserProfile, value: string) => void;
}

const defaultProfile: UserProfile = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  profile = defaultProfile,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(profile);
  };

  // Use profile prop if available, otherwise use default values
  const currentProfile = {
    ...defaultProfile,
    ...profile,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Thông tin cá nhân</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <input
            type="text"
            value={currentProfile.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={currentProfile.email || ""}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <input
            type="tel"
            value={currentProfile.phone || ""}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Địa chỉ
          </label>
          <input
            type="text"
            value={currentProfile.address || ""}
            onChange={(e) => onChange("address", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
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

export default ProfileSettings;
