import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../../config/axiosConfig";
import OverviewStats from "./components/OverviewStats";
import ExpenseTrends from "./components/ExpenseTrends";
import CategoryAnalysis from "./components/CategoryAnalysis";
import InsightsAlerts from "./components/InsightsAlerts";
import DateRangePicker from "./components/DateRangePicker";
import ReportExporter from "./components/ReportExporter";
import { DashboardData, Period } from "./types";

const DashboardOverview = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);
  const [period, setPeriod] = useState<Period>({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  });

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const params = {
        startDate: period.startDate.toISOString().split("T")[0],
        endDate: period.endDate.toISOString().split("T")[0],
      };

      const [overviewRes, trendsRes, expensesRes, alertsRes] = await Promise.all(
        [
          axiosInstance.get("/api/dashboard/overview", { params }),
          axiosInstance.get("/api/dashboard/trends", { params }),
          axiosInstance.get("/api/dashboard/expenses-by-category", { params }),
          axiosInstance.get("/api/dashboard/alerts", { params }),
        ]
      );

      setData({
        overview: overviewRes.data,
        trends: trendsRes.data,
        expensesByCategory: expensesRes.data,
        alerts: alertsRes.data,
      });
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [period]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Không có dữ liệu</p>
      </div>
    );
  }

  return (
    <div ref={dashboardRef} className="p-6 space-y-6">
      {/* Header with Controls */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tổng quan tài chính</h2>
        <div className="flex items-center gap-4">
          <DateRangePicker onDateChange={setPeriod} />
          <ReportExporter
            dashboardRef={dashboardRef}
            data={data}
            period={period}
          />
        </div>
      </div>

      {/* Overview Stats */}
      <OverviewStats data={data.overview} period={period} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseTrends data={data.trends} />
        <CategoryAnalysis data={data.expensesByCategory} />
      </div>

      {/* Insights and Alerts */}
      <InsightsAlerts alerts={data.alerts} />
    </div>
  );
};

export default DashboardOverview;
