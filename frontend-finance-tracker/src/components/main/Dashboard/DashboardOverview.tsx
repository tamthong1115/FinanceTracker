import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "../../ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  DollarSign,
  TrendingUp,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import axiosInstance from "../../../config/axiosConfig";
import { toast } from "react-toastify";

interface DashboardData {
  overview: {
    totalBalance: number;
    monthlyIncome: number;
    monthlyExpenses: number;
    savingsRate: number;
  };
  trends: Array<{
    month: string;
    income: number;
    expenses: number;
  }>;
  expensesByCategory: Array<{
    category: string;
    amount: number;
    color: string;
  }>;
  alerts: Array<{
    type: string;
    message: string;
    severity: "INFO" | "WARNING" | "ERROR";
  }>;
}

const DashboardOverview = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboardData = async () => {
    try {
      setRefreshing(true);
      const [overviewRes, trendsRes, expensesRes, alertsRes] = await Promise.all(
        [
          axiosInstance.get("/api/dashboard/overview"),
          axiosInstance.get("/api/dashboard/trends"),
          axiosInstance.get("/api/dashboard/expenses-by-category"),
          axiosInstance.get("/api/dashboard/alerts"),
        ]
      );

      setData({
        overview: overviewRes.data,
        trends: trendsRes.data,
        expensesByCategory: expensesRes.data,
        alerts: alertsRes.data,
      });
    } catch (error) {
      toast.error("Failed to load dashboard data");
      console.error("Dashboard data fetch error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6">
        <Card className="p-6 text-center">
          <p className="text-gray-500">No dashboard data available</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header with Refresh Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <button
          onClick={fetchDashboardData}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold">
                {formatCurrency(data.overview.totalBalance)}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Income</p>
              <p className="text-2xl font-bold">
                {formatCurrency(data.overview.monthlyIncome)}
              </p>
              <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                <ArrowUpIcon className="w-4 h-4" />
                <span>
                  +
                  {(
                    (data.overview.monthlyIncome /
                      data.overview.monthlyExpenses -
                      1) *
                    100
                  ).toFixed(1)}
                  % vs expenses
                </span>
              </div>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <ArrowUpIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Expenses</p>
              <p className="text-2xl font-bold">
                {formatCurrency(data.overview.monthlyExpenses)}
              </p>
              <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                <ArrowDownIcon className="w-4 h-4" />
                <span>
                  {(
                    (data.overview.monthlyExpenses /
                      data.overview.monthlyIncome) *
                    100
                  ).toFixed(1)}
                  % of income
                </span>
              </div>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <ArrowDownIcon className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Savings Rate</p>
              <p className="text-2xl font-bold">
                {data.overview.savingsRate.toFixed(1)}%
              </p>
              <div className="flex items-center gap-1 text-blue-600 text-sm mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>
                  {data.overview.savingsRate >= 20 ? "On track" : "Below target"}
                </span>
              </div>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Income vs Expenses Trend
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.trends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#10B981"
                  name="Income"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#EF4444"
                  name="Expenses"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Expenses by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.expensesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="amount"
                  nameKey="category"
                >
                  {data.expensesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Alerts & Recommendations</h3>
        <div className="space-y-4">
          {data.alerts.map((alert, index) => (
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
                <p className="font-medium">{alert.type}</p>
                <p className="text-sm text-gray-600">{alert.message}</p>
              </div>
            </div>
          ))}
          {data.alerts.length === 0 && (
            <p className="text-gray-500 text-center">No alerts at this time</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default DashboardOverview;
