import axiosInstance from "../config/axiosConfig";

export interface DashboardOverview {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
}

export interface SpendingTrend {
  month: string;
  income: number;
  expenses: number;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
  color: string;
}

export interface Alert {
  type: string;
  message: string;
  severity: "INFO" | "WARNING" | "ERROR";
}

const dashboardService = {
  async getOverview(): Promise<DashboardOverview> {
    const response = await axiosInstance.get("/api/dashboard/overview");
    return response.data;
  },

  async getSpendingTrends(): Promise<SpendingTrend[]> {
    const response = await axiosInstance.get("/api/dashboard/trends");
    return response.data;
  },

  async getExpensesByCategory(): Promise<ExpenseCategory[]> {
    const response = await axiosInstance.get(
      "/api/dashboard/expenses-by-category"
    );
    return response.data;
  },

  async getAlerts(): Promise<Alert[]> {
    const response = await axiosInstance.get("/api/dashboard/alerts");
    return response.data;
  },

  async getAllDashboardData(): Promise<{
    overview: DashboardOverview;
    trends: SpendingTrend[];
    expensesByCategory: ExpenseCategory[];
    alerts: Alert[];
  }> {
    const [overview, trends, expenses, alerts] = await Promise.all([
      this.getOverview(),
      this.getSpendingTrends(),
      this.getExpensesByCategory(),
      this.getAlerts(),
    ]);

    return {
      overview,
      trends,
      expensesByCategory: expenses,
      alerts,
    };
  },
};

export default dashboardService;
