import { Card } from "../../../../components/common/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpenseTrends = ({ data }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Xu hướng thu chi</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("vi-VN", {
                  month: "short",
                  year: "numeric",
                });
              }}
            />
            <YAxis
              width={100}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000000000) {
                  return `${(value / 1000000000).toFixed(1)}B`;
                } else if (value >= 1000000) {
                  return `${(value / 1000000).toFixed(1)}M`;
                } else if (value >= 1000) {
                  return `${(value / 1000).toFixed(1)}K`;
                }
                return value;
              }}
            />
            <Tooltip
              formatter={(value) => formatCurrency(value)}
              labelFormatter={(label) => {
                const date = new Date(label);
                return date.toLocaleDateString("vi-VN", {
                  month: "long",
                  year: "numeric",
                });
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#10B981"
              name="Thu nhập"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#EF4444"
              name="Chi tiêu"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ExpenseTrends;
