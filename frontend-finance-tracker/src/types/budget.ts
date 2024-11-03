export type BudgetPeriod = "WEEKLY" | "MONTHLY" | "YEARLY";

export interface Budget {
  id: number;
  category: string;
  limit: number;
  spent: number;
  period: BudgetPeriod;
  startDate: string;
  endDate: string;
  lastUpdated: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetFormData {
  category: string;
  limit: number;
  period: BudgetPeriod;
  startDate: string;
  endDate: string;
}

// Validation schema for budget form
export const budgetValidationSchema = {
  category: {
    required: "Category is required",
    minLength: {
      value: 2,
      message: "Category must be at least 2 characters",
    },
  },
  limit: {
    required: "Limit amount is required",
    min: {
      value: 0,
      message: "Limit amount must be positive",
    },
  },
  period: {
    required: "Period is required",
  },
  startDate: {
    required: "Start date is required",
  },
  endDate: {
    required: "End date is required",
    validate: (value: string, formValues: BudgetFormData) => {
      return (
        new Date(value) > new Date(formValues.startDate) ||
        "End date must be after start date"
      );
    },
  },
};

export interface BudgetSummary {
  totalBudget: number;
  totalSpent: number;
  remainingBudget: number;
  percentageUsed: number;
  categoryCounts: {
    [key: string]: number;
  };
}

// Constants for budget categories
export const BUDGET_CATEGORIES = [
  "Food & Dining",
  "Transportation",
  "Housing",
  "Utilities",
  "Entertainment",
  "Healthcare",
  "Shopping",
  "Education",
  "Personal Care",
  "Travel",
  "Gifts & Donations",
  "Business",
  "Other",
] as const;

export type BudgetCategory = (typeof BUDGET_CATEGORIES)[number];

// Helper function to calculate date range for different periods
export const getDateRangeForPeriod = (
  period: BudgetPeriod
): { startDate: string; endDate: string } => {
  const now = new Date();
  const startDate = new Date(now);
  const endDate = new Date(now);

  switch (period) {
    case "WEEKLY":
      startDate.setDate(now.getDate() - now.getDay()); // Start of week
      endDate.setDate(startDate.getDate() + 6); // End of week
      break;
    case "MONTHLY":
      startDate.setDate(1); // Start of month
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0); // End of month
      break;
    case "YEARLY":
      startDate.setMonth(0, 1); // Start of year
      endDate.setMonth(11, 31); // End of year
      break;
  }

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  };
};

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

// Helper function to calculate budget status
export const getBudgetStatus = (spent: number, limit: number) => {
  const percentage = (spent / limit) * 100;

  if (percentage >= 100) {
    return {
      status: "exceeded",
      color: "red",
      text: "Budget Exceeded",
    };
  } else if (percentage >= 80) {
    return {
      status: "warning",
      color: "yellow",
      text: "Near Limit",
    };
  } else {
    return {
      status: "good",
      color: "green",
      text: "On Track",
    };
  }
};

// Helper function to generate default budget name
export const generateBudgetName = (
  category: string,
  period: BudgetPeriod
): string => {
  const date = new Date();
  let timeFrame = "";

  switch (period) {
    case "WEEKLY":
      timeFrame = `Week ${Math.ceil(date.getDate() / 7)}`;
      break;
    case "MONTHLY":
      timeFrame = date.toLocaleString("default", { month: "long" });
      break;
    case "YEARLY":
      timeFrame = date.getFullYear().toString();
      break;
  }

  return `${category} Budget - ${timeFrame}`;
};
