import React, { useState } from "react";
import { Card } from "../../ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Calendar } from "lucide-react";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Mock data - replace with real data
  const expensesByCategory = [
    { name: "Ăn uống", value: 2000000, color: "#FF6B6B" },
    { name: "Di chuyển", value: 1500000, color: "#4ECDC4" },
    { name: "Mua sắm", value: 1000000, color: "#45B7D1" },
    { name: "Giải trí", value: 800000, color: "#96CEB4" },
    { name: "Hóa đơn", value: 1200000, color: "#FFEEAD" },
  ];

  const totalExpenses = expensesByCategory.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Báo cáo chi tiêu</h2>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="week">Tuần này</option>
            <option value="month">Tháng này</option>
            <option value="year">Năm nay</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Chi tiêu theo danh mục</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toLocaleString()} ₫`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {expensesByCategory.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: category.color }}
                  />
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">
                  {((category.value / totalExpenses) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats and Analysis */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Phân tích chi tiêu</h3>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-gray-600">Tổng chi tiêu:</dt>
                <dd className="font-bold">{totalExpenses.toLocaleString()} ₫</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Chi tiêu trung bình/ngày:</dt>
                <dd className="font-bold">
                  {(totalExpenses / 30).toLocaleString()} ₫
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Danh mục chi tiêu cao nhất:</dt>
                <dd className="font-bold text-red-500">Ăn uống</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">So với tháng trước:</dt>
                <dd className="font-bold text-green-500">-12%</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Gợi ý tiết kiệm</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-red-500">•</span>
                <span>
                  Chi tiêu cho ăn uống đang cao hơn 20% so với mục tiêu
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">•</span>
                <span>Bạn đã tiết kiệm được 15% trong mua sắm</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500">•</span>
                <span>
                  Xem xét giảm chi phí giải trí để đạt mục tiêu tiết kiệm
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
