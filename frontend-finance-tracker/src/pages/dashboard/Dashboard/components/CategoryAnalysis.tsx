import { useState } from "react";
import { Card } from "../../../../components/common/ui/card";
import { Progress } from "../../../../components/common/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface CategoryData {
  category: string;
  amount: number;
  color: string;
}

interface CategoryAnalysisProps {
  data: CategoryData[];
}

interface PieLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  name: string;
}

const CategoryAnalysis = ({ data }: CategoryAnalysisProps) => {
  const [selectedView, setSelectedView] = useState<"chart" | "list">("chart");

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const totalExpenses = data.reduce((sum, item) => sum + item.amount, 0);

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    name,
  }: PieLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const percent = ((value / totalExpenses) * 100).toFixed(0);

    return (
      <text
        x={x}
        y={y}
        fill="#374151"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="smaller"
      >
        {`${name} (${percent}%)`}
      </text>
    );
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">
          Phân tích chi tiêu theo danh mục
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedView("chart")}
            className={`px-3 py-1 rounded-md ${
              selectedView === "chart"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            Biểu đồ
          </button>
          <button
            onClick={() => setSelectedView("list")}
            className={`px-3 py-1 rounded-md ${
              selectedView === "list"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            Danh sách
          </button>
        </div>
      </div>

      {selectedView === "chart" ? (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="amount"
                nameKey="category"
                label={renderCustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ background: "white", border: "1px solid #ccc" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((category, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="font-medium">{category.category}</span>
                  <span className="text-sm text-gray-500">
                    ({((category.amount / totalExpenses) * 100).toFixed(1)}%)
                  </span>
                </div>
                <span className="font-medium">
                  {formatCurrency(category.amount)}
                </span>
              </div>
              <Progress
                value={(category.amount / totalExpenses) * 100}
                className={`h-2 transition-all`}
                style={{ 
                  "--bg-color": category.color + "40",
                  "--indicator-color": category.color
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default CategoryAnalysis;
