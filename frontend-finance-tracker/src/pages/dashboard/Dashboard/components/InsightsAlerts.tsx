import { Card } from "../../../../components/common/ui/card";
import { AlertCircle, TrendingUp, TrendingDown } from "lucide-react";

interface Alert {
  type: 'COMPARISON' | 'UNUSUAL_EXPENSE' | 'SAVINGS_OPPORTUNITY';
  severity: 'ERROR' | 'WARNING' | 'INFO';
  title: string;
  message: string;
  data?: ComparisonData | UnusualExpense[] | SavingsData;
}

interface ComparisonData {
  percentage: number;
}

interface UnusualExpense {
  category: string;
  amount: number;
  percentageIncrease: number;
}

interface SavingsData {
  amount: number;
  suggestion: string;
}

interface InsightsAlertsProps {
  alerts?: Alert[];
}

const InsightsAlerts = ({ alerts = [] }: InsightsAlertsProps) => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Safely type cast and extract data
  const comparisonAlert = alerts.find((alert) => alert.type === "COMPARISON");
  const unusualExpenseAlert = alerts.find((alert) => alert.type === "UNUSUAL_EXPENSE");
  const savingsAlert = alerts.find((alert) => alert.type === "SAVINGS_OPPORTUNITY");

  const previousPeriodComparison = comparisonAlert?.data as ComparisonData | undefined;
  const unusualExpenses = unusualExpenseAlert?.data as UnusualExpense[] | undefined;
  const savingsOpportunities = savingsAlert?.data as SavingsData | undefined;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Phân tích & Đề xuất</h3>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3">
              <AlertCircle
                className={`w-5 h-5 mt-0.5 ${
                  alert.severity === "ERROR"
                    ? "text-red-500"
                    : alert.severity === "WARNING"
                    ? "text-yellow-500"
                    : "text-blue-500"
                }`}
              />
              <div>
                <p className="font-medium">{alert.title}</p>
                <p className="text-sm text-gray-600">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insights Section */}
      <div className="mt-6 space-y-4">
        {/* Period Comparison */}
        {previousPeriodComparison && typeof previousPeriodComparison.percentage === 'number' && (
          <div
            className={`p-4 rounded-lg ${
              previousPeriodComparison.percentage > 0
                ? "bg-red-50"
                : "bg-green-50"
            }`}
          >
            <div className="flex items-center gap-2">
              {previousPeriodComparison.percentage > 0 ? (
                <TrendingUp className="w-5 h-5 text-red-600" />
              ) : (
                <TrendingDown className="w-5 h-5 text-green-600" />
              )}
              <h4
                className={`font-medium ${
                  previousPeriodComparison.percentage > 0
                    ? "text-red-700"
                    : "text-green-700"
                }`}
              >
                So sánh với kỳ trước
              </h4>
            </div>
            <p
              className={`text-sm mt-1 ${
                previousPeriodComparison.percentage > 0
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              Chi tiêu{" "}
              {previousPeriodComparison.percentage > 0 ? "tăng" : "giảm"}{" "}
              {Math.abs(previousPeriodComparison.percentage).toFixed(1)}% so với
              kỳ trước
            </p>
          </div>
        )}

        {/* Unusual Expenses */}
        {unusualExpenses && unusualExpenses.length > 0 && (
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium text-yellow-700">Chi tiêu bất thường</h4>
            <ul className="mt-2 space-y-1">
              {unusualExpenses.map((expense, index) => (
                <li key={index} className="text-sm text-yellow-600">
                  {expense.category}: {formatCurrency(expense.amount)} (
                  {expense.percentageIncrease}% cao hơn bình thường)
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Savings Opportunities */}
        {savingsOpportunities && savingsOpportunities.amount && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700">Cơ hội tiết kiệm</h4>
            <p className="text-sm text-blue-600 mt-1">
              Bạn có thể tiết kiệm thêm{" "}
              {formatCurrency(savingsOpportunities.amount)} bằng cách{" "}
              {savingsOpportunities.suggestion}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default InsightsAlerts;
