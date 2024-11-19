export interface Period {
  startDate: Date;
  endDate: Date;
}

export interface OverviewData {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
}

export interface CategoryData {
  category: string;
  amount: number;
  color: string;
}

export interface TrendData {
  month: string;
  income: number;
  expenses: number;
}

export interface Alert {
  type: 'COMPARISON' | 'UNUSUAL_EXPENSE' | 'SAVINGS_OPPORTUNITY';
  severity: 'ERROR' | 'WARNING' | 'INFO';
  title: string;
  message: string;
  data?: any;
}

export interface DashboardData {
  overview: OverviewData;
  trends: TrendData[];
  expensesByCategory: CategoryData[];
  alerts: Alert[];
}
