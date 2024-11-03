import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Goal {
  id?: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

interface GoalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Goal, "id">) => void;
  initialData?: Goal | null;
}

const GoalFormModal: React.FC<GoalFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<Omit<Goal, "id">>({
    name: "",
    targetAmount: 0,
    currentAmount: 0,
    deadline: new Date().toISOString().split("T")[0],
    color: "bg-blue-500",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        targetAmount: initialData.targetAmount,
        currentAmount: initialData.currentAmount,
        deadline: initialData.deadline,
        color: initialData.color,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? "Chỉnh sửa mục tiêu" : "Thêm mục tiêu mới"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên mục tiêu
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="VD: Mua nhà"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số tiền mục tiêu
            </label>
            <input
              type="number"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số tiền"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số tiền hiện tại
            </label>
            <input
              type="number"
              name="currentAmount"
              value={formData.currentAmount}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số tiền hiện có"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời hạn
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Màu sắc
            </label>
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-blue-500">Xanh dương</option>
              <option value="bg-green-500">Xanh lá</option>
              <option value="bg-purple-500">Tím</option>
              <option value="bg-pink-500">Hồng</option>
              <option value="bg-yellow-500">Vàng</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              {initialData ? "Cập nhật" : "Thêm mục tiêu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalFormModal;
