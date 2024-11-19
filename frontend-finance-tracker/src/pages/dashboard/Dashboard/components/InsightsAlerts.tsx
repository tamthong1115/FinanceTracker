import { Card } from "../../../../components/common/ui/card";
import { AlertCircle, TrendingUp, TrendingDown } from "lucide-react";

const InsightsAlerts = ({ data, alerts }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Calculate insights
  const previousPeriodComparison =
    alerts?.find((alert) => alert.type === "COMPARISON")?.data || {};
  const unusualExpenses =
    alerts?.find((alert) => alert.type === "UNUSUAL_EXPENSE")?.data || [];
  const savingsOpportunities =
    alerts?.find((alert) => alert.type === "SAVINGS_OPPORTUNITY")?.data || {};

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Phân tích & Đề xuất</h3>

      {/* Alerts Section */}
      <div className="space-y-4">
        {alerts?.map((alert, index) => (
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

      {/* Insights Section */}
      <div className="mt-6 space-y-4">
        {/* Period Comparison */}
        {previousPeriodComparison.percentage && (
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
        {unusualExpenses.length > 0 && (
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
        {savingsOpportunities.amount && (
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
