import { Card } from "../../../../components/common/ui/card";
import { ArrowUp, ArrowDown, TrendingUp, DollarSign } from "lucide-react";
import { OverviewData, Period } from "../types";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const formatPercentageChange = (value: number) => {
  const formatted = Math.abs(value).toFixed(1);
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
};

interface OverviewStatsProps {
  data: OverviewData;
  period: Period;
}

const OverviewStats = ({ data, period }: OverviewStatsProps) => {
  const periodText = getPeriodText(period.startDate, period.endDate);
  const incomeVsExpensePercentage = ((data.monthlyIncome / data.monthlyExpenses - 1) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Tổng số dư</p>
            <p className="text-2xl font-bold">
              {formatCurrency(data.totalBalance)}
            </p>
            <p className="text-sm text-gray-500 mt-1">{periodText}</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Thu nhập</p>
            <p className="text-2xl font-bold">
              {formatCurrency(data.monthlyIncome)}
            </p>
            <div className={`flex items-center gap-1 ${
              incomeVsExpensePercentage >= 0 ? 'text-green-600' : 'text-red-600'
            } text-sm mt-1`}>
              {incomeVsExpensePercentage >= 0 ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              <span>
                {formatPercentageChange(incomeVsExpensePercentage)}% so với chi tiêu
              </span>
            </div>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <ArrowUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Chi tiêu</p>
            <p className="text-2xl font-bold">
              {formatCurrency(data.monthlyExpenses)}
            </p>
            <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
              <span>
                {((data.monthlyExpenses / data.monthlyIncome) * 100).toFixed(1)}%
                thu nhập
              </span>
            </div>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <ArrowDown className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Tỷ lệ tiết kiệm</p>
            <p className="text-2xl font-bold">{data.savingsRate.toFixed(1)}%</p>
            <div className="flex items-center gap-1 text-blue-600 text-sm mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>
                {data.savingsRate >= 20 ? "Đạt mục tiêu" : "Chưa đạt mục tiêu"}
              </span>
            </div>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Card>
    </div>
  );
};

const getPeriodText = (startDate: string | Date, endDate: string | Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  if (days <= 7) return "7 ngày qua";
  if (days <= 30) return "30 ngày qua";
  if (days <= 90) return "Quý này";
  return "Tổng kết";
};

export default OverviewStats;
