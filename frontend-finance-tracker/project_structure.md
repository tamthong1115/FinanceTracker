# Project Structure: frontend-finance-tracker

## Directory Structure

- 📄 eslint.config.js
- 📄 index.html
- 📄 package.json
- 📄 postcss.config.js
- 📁 public/
  - 📁 header/
    - 🖼️ password-icon.svg
    - 🖼️ sign-in.png
  - 🖼️ icon.png
  - 📁 img/
    - 🖼️ Finace-tracker-background.webp
    - 🖼️ Finace-tracker-background2.webp
    - 🖼️ dd1.jpg
    - 🖼️ dd2.jpg
    - 🖼️ dd3.jpg
    - 🖼️ dd4.jpg
    - 🖼️ dd5.jpg
    - 🖼️ dd6.jpg
    - 🖼️ icons8-add-dollar-100-colorBasic.png
    - 🖼️ icons8-add-dollar-100-colorBlue.png
    - 🖼️ icons8-bank-100.png
    - 🖼️ icons8-chart-100-colorBasic.png
    - 🖼️ icons8-chart-100-colorBlue.png
    - 🖼️ icons8-chart-100.png
    - 🖼️ icons8-company-100-colorBasic.png
    - 🖼️ icons8-currencies-100.png
    - 🖼️ icons8-get-quote-100-colorWhite.png
    - 🖼️ icons8-google-alerts-100.png
    - 🖼️ icons8-in-progress.gif
    - 🖼️ icons8-money-bag-100.png
    - 🖼️ icons8-professional-100-basic.png
    - 🖼️ icons8-professional-100-blue.png
    - 🖼️ icons8-professional-100-colorBlue.png
    - 🖼️ icons8-quote-100.png
    - 🖼️ icons8-related-companies-100-colorBlue.png
    - 🖼️ icons8-sync-100.png
    - 🖼️ icons8-user-100.png
    - 🖼️ icons8-wallet-100.png
  - 📁 screenshots/
    - 🖼️ budgets.png
    - 🖼️ dashboard-use-filter.png
    - 🖼️ dashboard.png
    - 🖼️ goals.png
    - 🖼️ notification-setting.png
    - 🖼️ profile-setting.png
    - 🖼️ transactions.png
  - 📁 template-exported/
    - 📄 finance-report.pdf
    - 📄 finance-report.xlsx
- 📁 src/
  - 📄 App.tsx
  - 📁 components/
    - 📄 Layout.tsx
    - 📁 common/
      - 📄 LoadingSpinner.tsx
      - 📄 ProtectedRoute.tsx
      - 📁 ui/
        - 📄 card.tsx
        - 📄 progress.tsx
    - 📁 public-pages/
      - 📁 ContactForm/
        - 📄 ContactForm.tsx
      - 📁 Footer/
        - 📄 Footer.tsx
        - 📄 Icons.tsx
      - 📁 Header/
        - 📄 Header.tsx
      - 📁 Hero/
        - 📄 Hero.tsx
      - 📁 SlideShow/
        - 📄 SlickSlide-OurCommunity.tsx
        - 📄 SlideShow.tsx
  - 📁 config/
    - 📄 AppRoutes.tsx
    - 📄 AuthContext.tsx
    - 📄 axiosConfig.ts
    - 📄 utils.ts
  - 📁 hooks/
    - 📄 useBudgets.ts
    - 📄 useGoals.ts
    - 📄 useSettings.ts
    - 📄 useTransactions.ts
  - 📄 main.tsx
  - 📁 pages/
    - 📁 dashboard/
      - 📁 Budget/
        - 📄 Budget.tsx
        - 📄 BudgetForm.tsx
      - 📁 Dashboard/
        - 📄 DashboardOverview.tsx
        - 📁 components/
          - 📄 CategoryAnalysis.tsx
          - 📄 DateRangePicker.tsx
          - 📄 ExpenseTrends.tsx
          - 📄 InsightsAlerts.tsx
          - 📄 OverviewStats.tsx
          - 📄 ReportExporter.tsx
        - 📄 types.ts
      - 📄 Dashboard.tsx
      - 📁 Goals/
        - 📄 GoalFormModal.tsx
        - 📄 SavingsGoals.tsx
      - 📄 Header.tsx
      - 📁 Setting/
        - 📄 NotificationSettings.tsx
        - 📄 PreferencesSettings.tsx
        - 📄 ProfileSettings.tsx
        - 📄 SecuritySettings.tsx
        - 📄 SettingTabs.tsx
        - 📄 Settings.tsx
        - 📄 index.ts
      - 📄 Sidebar.tsx
      - 📁 Transactions/
        - 📄 TransactionFilters.tsx
        - 📄 TransactionForm.tsx
        - 📄 TransactionImport.tsx
        - 📄 TransactionList.tsx
        - 📄 Transactions.tsx
    - 📁 public/
      - 📁 AboutUs/
        - 📄 AboutUs.tsx
      - 📁 Home/
        - 📄 Home.tsx
      - 📁 LoginAndRegister/
        - 📄 LoginForm.tsx
        - 📄 RegisterForm.tsx
  - 📁 services/
    - 📄 dashboardService.ts
    - 📄 settingsService.ts
  - 📁 types/
    - 📄 auth.ts
    - 📄 budget.ts
    - 📄 goal.ts
    - 📄 props.ts
    - 📄 settings.ts
    - 📄 transaction.ts
  - 📄 vite-env.d.ts
- 📄 tailwind.config.js
- 📄 tsconfig.app.json
- 📄 tsconfig.json
- 📄 tsconfig.node.json
- 📄 vite.config.ts

## File Contents

### 📄 package.json

```
{
  "name": "frontend-finance-tracker",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.2.4",
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@fortawesome/fontawesome-svg-core": "^6.6.0",
    "@fortawesome/free-brands-svg-icons": "^6.6.0",
    "@fortawesome/free-regular-svg-icons": "^6.6.0",
    "@fortawesome/free-solid-svg-icons": "^6.6.0",
    "@headlessui/react": "^2.1.10",
    "@material-tailwind/react": "^2.1.10",
    "@mui/icons-material": "^6.1.4",
    "@mui/material": "^6.1.4",
    "@radix-ui/react-progress": "^1.1.0",
    "@types/papaparse": "^5.3.15",
    "@types/react-toastify": "^4.0.2",
    "axios": "^1.7.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "font-awesome": "^4.7.0",
    "formik": "^2.4.6",
    "jspdf": "^2.5.2",
    "lucide-react": "^0.451.0",
    "papaparse": "^5.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.1",
    "react-query": "^3.39.3",
    "react-router-dom": "^6.27.0",
    "react-slick": "^0.30.2",
    "react-toastify": "^10.0.6",
    "recharts": "^2.13.3",
    "slick-carousel": "^1.8.1",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7",
    "xlsx-js-style": "^1.2.0",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.11.1",
    "@shadcn/ui": "^0.0.4",
    "@types/jspdf": "^1.3.3",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-slick": "^0.23.13",
    "@types/xlsx": "^0.0.35",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.11.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "globals": "^15.9.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.7.0",
    "vite": "^5.4.8"
  }
}

```

### 📄 tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

### 📄 postcss.config.js

```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

### 📄 tsconfig.json

```
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

### 📄 eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

### 📄 vite.config.ts

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

### 📄 tsconfig.node.json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

### 📄 index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### 📄 tsconfig.app.json

```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

### 📄 src/main.tsx

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### 📄 src/vite-env.d.ts

```
/// <reference types="vite/client" />

```

### 📄 src/App.tsx

```
import { AuthProvider } from "./config/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

```

### 📄 src/services/settingsService.ts

```
import axiosInstance from "../config/axiosConfig";
import {
  UserSettingsResponse,
  UserProfile,
  NotificationSettings,
  Preferences,
  DEFAULT_SETTINGS,
  UpdatePasswordRequest,
} from "../types/settings";

const BASE_URL = "/api/settings";

export const settingsApi = {
  getCurrentSettings: async (): Promise<UserSettingsResponse> => {
    try {
      const response = await axiosInstance.get<UserSettingsResponse>(BASE_URL);
      console.log("Fetched settings:", response.data);
      return {
        ...DEFAULT_SETTINGS,
        ...response.data,
      };
    } catch (error) {
      console.error("Error fetching settings:", error);
      throw error;
    }
  },

  updateProfile: async (
    data: UserProfile,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/profile`,
        updateData
      );
      console.log("Updated profile:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },

  updatePassword: async (data: UpdatePasswordRequest): Promise<void> => {
    try {
      await axiosInstance.put(`${BASE_URL}/password`, data);
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  },

  updateNotifications: async (
    data: NotificationSettings,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/notifications`,
        updateData
      );
      console.log("Updated notifications:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating notifications:", error);
      throw error;
    }
  },

  updatePreferences: async (
    data: Preferences,
    currentSettings: UserSettingsResponse
  ): Promise<UserSettingsResponse> => {
    try {
      const updateData = {
        ...currentSettings,
        ...data,
      };
      const response = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/preferences`,
        updateData
      );
      console.log("Updated preferences:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating preferences:", error);
      throw error;
    }
  },

  // Utility functions
  extractProfile: (settings: UserSettingsResponse): UserProfile => ({
    name: settings.name,
    email: settings.email,
    phone: settings.phone,
    address: settings.address,
  }),

  extractNotifications: (
    settings: UserSettingsResponse
  ): NotificationSettings => ({
    emailNotifications: settings.emailNotifications,
    budgetAlerts: settings.budgetAlerts,
    transactionNotifications: settings.transactionNotifications,
  }),

  extractPreferences: (settings: UserSettingsResponse): Preferences => ({
    currency: settings.currency || "VND",
    fiscalMonthStartDay: settings.fiscalMonthStartDay || 1,
    dateFormat: settings.dateFormat || "DD/MM/YYYY",
    darkMode: settings.darkMode,
  }),
};

export default settingsApi;

```

### 📄 src/services/dashboardService.ts

```
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

```

### 📄 src/types/settings.ts

```
export interface UserSettingsResponse {
  id: number;
  userId: number;
  // Profile
  name: string;
  email: string;
  phone: string;
  address: string;
  // Notifications
  emailNotifications: boolean;
  budgetAlerts: boolean;
  transactionNotifications: boolean;
  // Preferences
  currency: string | null;
  fiscalMonthStartDay: number | null;
  dateFormat: string | null;
  darkMode: boolean;
  // Metadata
  createdAt?: string;
  updatedAt?: string;
}

// Grouped interfaces for UI organization
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  budgetAlerts: boolean;
  transactionNotifications: boolean;
}

export interface Preferences {
  currency: string;
  fiscalMonthStartDay: number;
  dateFormat: string;
  darkMode: boolean;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// Default values
export const DEFAULT_SETTINGS: UserSettingsResponse = {
  id: 0,
  userId: 0,
  name: "",
  email: "",
  phone: "",
  address: "",
  emailNotifications: true,
  budgetAlerts: true,
  transactionNotifications: true,
  currency: "VND",
  fiscalMonthStartDay: 1,
  dateFormat: "DD/MM/YYYY",
  darkMode: false,
};

// Utility function to transform API response to grouped format
export const transformResponseToGrouped = (response: UserSettingsResponse) => {
  return {
    profile: {
      name: response.name,
      email: response.email,
      phone: response.phone,
      address: response.address,
    },
    notifications: {
      emailNotifications: response.emailNotifications,
      budgetAlerts: response.budgetAlerts,
      transactionNotifications: response.transactionNotifications,
    },
    preferences: {
      currency: response.currency || "VND",
      fiscalMonthStartDay: response.fiscalMonthStartDay || 1,
      dateFormat: response.dateFormat || "DD/MM/YYYY",
      darkMode: response.darkMode,
    },
  };
};

// Utility function to transform grouped format back to API format
export const transformGroupedToResponse = (
  grouped: {
    profile: UserProfile;
    notifications: NotificationSettings;
    preferences: Preferences;
  },
  currentSettings: UserSettingsResponse
): UserSettingsResponse => {
  return {
    ...currentSettings,
    // Profile
    name: grouped.profile.name,
    email: grouped.profile.email,
    phone: grouped.profile.phone,
    address: grouped.profile.address,
    // Notifications
    emailNotifications: grouped.notifications.emailNotifications,
    budgetAlerts: grouped.notifications.budgetAlerts,
    transactionNotifications: grouped.notifications.transactionNotifications,
    // Preferences
    currency: grouped.preferences.currency,
    fiscalMonthStartDay: grouped.preferences.fiscalMonthStartDay,
    dateFormat: grouped.preferences.dateFormat,
    darkMode: grouped.preferences.darkMode,
  };
};

// Constants
export const CURRENCY_OPTIONS = [
  { value: "VND", label: "VND - Việt Nam Đồng" },
  { value: "USD", label: "USD - US Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "JPY", label: "JPY - Japanese Yen" },
];

export const DATE_FORMAT_OPTIONS = [
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
];

export const FISCAL_MONTH_START_OPTIONS = Array.from({ length: 28 }, (_, i) => ({
  value: i + 1,
  label: `Ngày ${i + 1}`,
}));

```

### 📄 src/types/goal.ts

```
export interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

export interface GoalFormData {
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

export type CreateGoalRequest = Omit<GoalFormData, "currentAmount">;
export type UpdateGoalRequest = Partial<GoalFormData>;

```

### 📄 src/types/props.ts

```
export interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export interface NavItem {
  icon: React.ReactNode;
  text: string;
  href: string;
  description: string;
}

export interface HeaderProps {
  isSidebarExpanded: boolean;
}

```

### 📄 src/types/budget.ts

```
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

```

### 📄 src/types/transaction.ts

```
export type TransactionType = "INCOME" | "EXPENSE";
export type TransactionStatus = "COMPLETED" | "PENDING" | "CANCELLED";
export type RecurrentPeriod = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

export interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  date: string;
  paymentMethod: string;
  status: TransactionStatus;
  attachments?: string[];
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: RecurrentPeriod;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionFormData {
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: string;
  paymentMethod: string;
  status?: TransactionStatus;
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: RecurrentPeriod;
}

```

### 📄 src/types/auth.ts

```
export interface RegisterType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

```

### 📄 src/config/AppRoutes.tsx

```
import { Routes, Route } from "react-router-dom";
import LoginForm from "../pages/public/LoginAndRegister/LoginForm.tsx";
import RegisterForm from "../pages/public/LoginAndRegister/RegisterForm.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import { ProtectedRoute } from "../components/common/ProtectedRoute.tsx";
import Layout from "../components/Layout.tsx";
import Home from "../pages/public/Home/Home.tsx";
import AboutUs from "../pages/public/AboutUs/AboutUs.tsx";
import { Budget } from "../pages/dashboard/Budget/Budget.tsx";
import Transactions  from "../pages/dashboard/Transactions/Transactions.tsx";
import SavingsGoals from "../pages/dashboard/Goals/SavingsGoals.tsx";
import Settings from "../pages/dashboard/Setting/Settings.tsx";
import DashboardOverview from "../pages/dashboard/Dashboard/DashboardOverview.tsx";
import ContactForm from "../components/public-pages/ContactForm/ContactForm.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/login"
        element={
          <Layout>
            <LoginForm />
          </Layout>
        }
      />

      <Route
        path="/register"
        element={
          <Layout>
            <RegisterForm />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactForm />
          </Layout>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardOverview />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="budget" element={<Budget />} />
        <Route path="goals" element={<SavingsGoals />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

```

### 📄 src/config/axiosConfig.ts

```
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                    toast.error('Authentication failed. Please login again.');
                    break;
                case 403:
                    toast.error('You do not have permission to perform this action');
                    break;
                case 404:
                    // Don't show error for profile endpoint
                    if (!error.config.url.includes('api/auth/profile')) {
                        toast.error('Resource not found');
                    }
                    break;
                case 500:
                    toast.error('Internal server error. Please try again later.');
                    break;
                default:
                    toast.error(error.response.data?.message || 'Something went wrong');
            }
        } else if (error.request) {
            toast.error('No response from server. Please check your connection.');
        } else {
            toast.error('Request failed. Please try again.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

```

### 📄 src/config/AuthContext.tsx

```
import {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./axiosConfig";
import { AuthContextType, User } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if (token && savedUser) {
          setIsAuthenticated(true);
          setUser(JSON.parse(savedUser));
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (token: string, userData: User): void => {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setIsAuthenticated(true);
      setUser(userData);
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axiosInstance.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      // Add any API logout calls here if needed
      handleLogout();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

```

### 📄 src/config/utils.ts

```
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

### 📄 src/hooks/useBudgets.ts

```
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import axiosInstance from "../config/axiosConfig";
import { Budget, BudgetFormData } from "../types/budget";

interface ApiError {
  message: string;
}

const BASE_URL = "/api/budgets";

export const useBudgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBudgets = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Budget[]>(BASE_URL);
      setBudgets(response.data);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to fetch budgets";
      setError(errorMessage);
      toast.error(errorMessage, {
        toastId: "fetch-budgets-error",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createBudget = async (data: BudgetFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Budget>(BASE_URL, data);
      setBudgets((prev) => [...prev, response.data]);
      toast.success("Budget created successfully");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to create budget";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateBudget = async (id: number, data: BudgetFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Budget>(`${BASE_URL}/${id}`, data);
      setBudgets((prev) =>
        prev.map((budget) => (budget.id === id ? response.data : budget))
      );
      toast.success("Budget updated successfully");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update budget";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteBudget = async (id: number) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`${BASE_URL}/${id}`);
      setBudgets((prev) => prev.filter((budget) => budget.id !== id));
      toast.success("Budget deleted successfully");
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to delete budget";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    budgets,
    loading,
    error,
    fetchBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
  };
};

```

### 📄 src/hooks/useGoals.ts

```
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import axiosInstance from "../config/axiosConfig";

interface ApiError {
  message: string;
}

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

const BASE_URL = "/api/goals";

export const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGoals = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Goal[]>(BASE_URL);
      setGoals(response.data);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to fetch goals";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const createGoal = async (data: Omit<Goal, "id" | "currentAmount">) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Goal>(BASE_URL, data);
      setGoals((prev) => [...prev, response.data]);
      toast.success("Goal created successfully");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to create goal";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateGoal = async (id: number, data: Partial<Goal>) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Goal>(`${BASE_URL}/${id}`, data);
      setGoals((prev) =>
        prev.map((goal) => (goal.id === id ? response.data : goal))
      );
      toast.success("Goal updated successfully");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update goal";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteGoal = async (id: number) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`${BASE_URL}/${id}`);
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
      toast.success("Goal deleted successfully");
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to delete goal";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    goals,
    loading,
    error,
    fetchGoals,
    createGoal,
    updateGoal,
    deleteGoal,
  };
};

```

### 📄 src/hooks/useSettings.ts

```
import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import axiosInstance from "../config/axiosConfig";
import {
  UserSettingsResponse,
  DEFAULT_SETTINGS,
  UserProfile,
  NotificationSettings,
  Preferences,
  UpdatePasswordRequest,
} from "../types/settings";

interface ApiError {
  message: string;
}

const BASE_URL = "/api/settings";

export const useSettings = () => {
  const [settings, setSettings] =
    useState<UserSettingsResponse>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axiosInstance.get<UserSettingsResponse>(`${BASE_URL}`);
      console.log("Fetched settings in hook:", data);
      setSettings(data);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to fetch settings";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = async (profileData: UserProfile) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/profile`,
        profileData
      );
      console.log("Updated settings after profile update:", updatedSettings);
      setSettings(updatedSettings);
      return {
        name: updatedSettings.name,
        email: updatedSettings.email,
        phone: updatedSettings.phone,
        address: updatedSettings.address
      };
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update profile";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setLoading(true);
      await axiosInstance.put(`${BASE_URL}/password`, data);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update password";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateNotifications = async (notificationData: NotificationSettings) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/notifications`,
        notificationData
      );
      console.log(
        "Updated settings after notifications update:",
        updatedSettings
      );
      setSettings(updatedSettings);
      return {
        emailNotifications: updatedSettings.emailNotifications,
        budgetAlerts: updatedSettings.budgetAlerts,
        transactionNotifications: updatedSettings.transactionNotifications
      };
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update notifications";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (preferencesData: Preferences) => {
    try {
      setLoading(true);
      const { data: updatedSettings } = await axiosInstance.put<UserSettingsResponse>(
        `${BASE_URL}/preferences`,
        preferencesData
      );
      console.log("Updated settings after preferences update:", updatedSettings);
      setSettings(updatedSettings);
      return {
        currency: updatedSettings.currency || "VND",
        fiscalMonthStartDay: updatedSettings.fiscalMonthStartDay || 1,
        dateFormat: updatedSettings.dateFormat || "DD/MM/YYYY",
        darkMode: updatedSettings.darkMode
      };
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage =
        error.response?.data?.message || "Failed to update preferences";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setSettings((prev: UserSettingsResponse) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationsChange = (
    field: keyof NotificationSettings,
    value: boolean
  ) => {
    setSettings((prev: UserSettingsResponse) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePreferencesChange = (field: keyof Preferences, value: Preferences[keyof Preferences]) => {
    setSettings((prev: UserSettingsResponse) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    settings,
    loading,
    error,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateNotifications,
    updatePreferences,
    // Change handlers
    handleProfileChange,
    handleNotificationsChange,
    handlePreferencesChange,
    // Data getters
    currentProfile: () => ({
      name: settings.name,
      email: settings.email,
      phone: settings.phone,
      address: settings.address
    }),
    currentNotifications: () => ({
      emailNotifications: settings.emailNotifications,
      budgetAlerts: settings.budgetAlerts,
      transactionNotifications: settings.transactionNotifications
    }),
    currentPreferences: () => ({
      currency: settings.currency || "VND",
      fiscalMonthStartDay: settings.fiscalMonthStartDay || 1,
      dateFormat: settings.dateFormat || "DD/MM/YYYY",
      darkMode: settings.darkMode
    }),
  };
};

```

### 📄 src/hooks/useTransactions.ts

```
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosConfig";
import { Transaction, TransactionFormData } from "../types/transaction";

const BASE_URL = "/api/transactions";

interface UseTransactionsReturn {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  createTransaction: (data: TransactionFormData) => Promise<Transaction>;
  updateTransaction: (
    id: number,
    data: TransactionFormData
  ) => Promise<Transaction>;
  deleteTransaction: (id: number) => Promise<void>;
}

export const useTransactions = (): UseTransactionsReturn => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Transaction[]>(BASE_URL);
      setTransactions(response.data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch transactions";
      setError(errorMessage);
      toast.error(errorMessage, {
        toastId: "fetch-transactions-error",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createTransaction = async (
    data: TransactionFormData
  ): Promise<Transaction> => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Transaction>(BASE_URL, data);
      setTransactions((prev) => [...prev, response.data]);
      toast.success("Transaction created successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create transaction";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const updateTransaction = async (
    id: number,
    data: TransactionFormData
  ): Promise<Transaction> => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Transaction>(
        `${BASE_URL}/${id}`,
        data
      );
      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction.id === id ? response.data : transaction
        )
      );
      toast.success("Transaction updated successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update transaction";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      await axiosInstance.delete(`${BASE_URL}/${id}`);
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
      toast.success("Transaction deleted successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete transaction";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  };
};

export default useTransactions;

```

### 📄 src/components/Layout.tsx

```
import PropTypes from "prop-types";
import Header from "./public-pages/Header/Header";
import Footer from "./public-pages/Footer/Footer";

type LayoutProps = {
  children: PropTypes.ReactNodeLike;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-90 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

```

### 📄 src/components/common/ProtectedRoute.tsx

```
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

```

### 📄 src/components/common/LoadingSpinner.tsx

```
const LoadingSpinner = () => {
    return (
        <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-gray-100 border-t-blue-600"/>
    );
};

export default LoadingSpinner;
```

### 📄 src/components/public-pages/ContactForm/ContactForm.tsx

```
const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-gray-500">Chúng tôi rất mong nhận được phản hồi từ bạn</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200"
                placeholder="Nhập địa chỉ email của bạn"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Nội dung
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 resize-none"
                placeholder="Nhập nội dung tin nhắn..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <span>Gửi tin nhắn</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

```

### 📄 src/components/public-pages/Footer/Footer.tsx

```
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, GitHubIcon } from "./Icons";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, icon }) => (
  <a href={href} className="social-link" aria-label={ariaLabel}>
    {icon}
  </a>
);

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "#",
      ariaLabel: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      href: "#",
      ariaLabel: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      href: "#",
      ariaLabel: "GitHub",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <div className="flex space-x-6 md:order-2">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

interface LinkItem {
  text: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="footer-heading">{title}</h3>
    <ul className="mt-4 space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url} className="footer-link">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLinks: React.FC = () => {
  const sections: FooterSectionProps[] = [
    {
      title: "Giải pháp",
      links: [
        { text: "Quản lý ngân sách", url: "/budget" },
        { text: "Đầu tư", url: "/investments" },
        { text: "Tiết kiệm", url: "/savings" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { text: "Câu hỏi thường gặp", url: "/faq" },
        { text: "Trung tâm trợ giúp", url: "/help" },
        { text: "Liên hệ", url: "/contact" },
      ],
    },
    {
      title: "Công ty",
      links: [
        { text: "Về chúng tôi", url: "/about-us" },
        { text: "Blog", url: "/blog" },
        { text: "Tuyển dụng", url: "/careers" },
      ],
    },
    {
      title: "Pháp lý",
      links: [
        { text: "Chính sách bảo mật", url: "/privacy" },
        { text: "Điều khoản sử dụng", url: "/terms" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} links={section.links} />
      ))}
    </div>
  );
};

// Newsletter component
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Đăng ký với email:", email);
    setEmail("");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3 className="footer-heading">Đăng ký nhận bản tin</h3>
      <p className="mt-4 text-base text-gray-300">
        Nhận các mẹo tài chính mới nhất và cập nhật sản phẩm.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Địa chỉ email
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={handleEmailChange}
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
          placeholder="Nhập email của bạn"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
};

const Copyright: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
      &copy; {currentYear} FinanceTracker. Đã đăng ký bản quyền.
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <FooterLinks />
          <div className="mt-8 xl:mt-0">
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

### 📄 src/components/public-pages/Footer/Icons.tsx

```
import React from "react";

export const FacebookIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

export const TwitterIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export const GitHubIcon: React.FC = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

```

### 📄 src/components/public-pages/Header/Header.tsx

```
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/about-us", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="icon.png" alt="logo" className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800">Quản Lý Tài Chính</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Đăng nhập
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } fixed inset-0 z-50`}
      >
        <div className="fixed inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
        <nav className="fixed top-0 right-0 bottom-0 w-64 bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <img src="icon.png" alt="logo" className="w-8 h-8" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 font-medium ${
                  isActive(path)
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-4 py-2 text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Đăng nhập
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

```

### 📄 src/components/public-pages/SlideShow/SlideShow.tsx

```
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Background {
    url: string;
    title: string;
    subtitle: string;
}

const SlideShow: React.FC = () => {
    const backgrounds: Background[] = [
        {
            url: 'img/Finace-tracker-background.webp',
            title: 'Xây Dựng Kế Hoạch Tài Chính Cùng Chuyên Gia',
            subtitle: 'Kiểm soát chi tiêu, đầu tư thông minh và đạt được mục tiêu tài chính của bạn'
        },
        {
            url: 'img/Finace-tracker-background2.webp',
            title: 'Đồng Hành Cùng Bạn Trên Con Đường Tài Chính',
            subtitle: 'Giải pháp quản lý tài chính toàn diện cho cuộc sống thịnh vượng'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000); // Increased to 5 seconds for better readability
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="slideshow relative h-[75vh] w-full overflow-hidden">
            <div
                className="relative h-full w-full bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${backgrounds[currentSlide].url})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        {backgrounds[currentSlide].title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
                        {backgrounds[currentSlide].subtitle}
                    </p>
                    <Link
                        to="/login"
                        className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        BẮT ĐẦU NGAY
                        <svg
                            className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;




```

### 📄 src/components/public-pages/SlideShow/SlickSlide-OurCommunity.tsx

```
import React from "react";
import Slider from "react-slick";

interface Testimonial {
  name: string;
  img: string;
  review: string;
}

const CommunityData: Testimonial[] = [
  {
    name: `Minh Anh`,
    img: `dd6.jpg`,
    review: `Tôi đã sử dụng ứng dụng này hơn hai năm và tôi rất hài lòng với dịch vụ mà tôi nhận được.`,
  },
  {
    name: `Ngọc Trân`,
    img: `dd5.jpg`,
    review: `Ứng dụng này đã thay đổi hoàn toàn cách tôi quản lý tài chính! Các công cụ lập ngân sách rất trực quan và giúp tôi tiết kiệm nhiều hơn những gì tôi nghĩ là có thể.`,
  },
  {
    name: `Đức Nguyễn`,
    img: `dd4.jpg`,
    review: `Tôi thích giao diện đơn giản và dễ sử dụng. Nó giúp việc theo dõi chi tiêu của tôi dễ dàng hơn rất nhiều. Tôi không thể tưởng tượng quay lại phương pháp cũ!`,
  },
  {
    name: `Thu Lê`,
    img: `dd3.jpg`,
    review: `Những phân tích tài chính cá nhân thật tuyệt vời! Tôi đã học được rất nhiều về thói quen chi tiêu của mình, và tôi đang trên đường đạt được mục tiêu tài chính!`,
  },
  {
    name: `Minh Phạm`,
    img: `dd1.jpg`,
    review: `Ứng dụng này thực sự là một bước đột phá! Tính năng ví chung rất hoàn hảo để quản lý chi tiêu với bạn đời. Nó giúp chúng tôi luôn đồng bộ với nhau!`,
  },
  {
    name: `Ánh Vũ`,
    img: `dd2.jpg`,
    review: `Tôi đánh giá cao các tính năng báo cáo chi tiết. Tôi có thể dễ dàng theo dõi tiền của mình đã chi tiêu như thế nào mỗi tháng, và nó thúc đẩy tôi tuân thủ ngân sách!`,
  },
];

const CommunitySlider: React.FC = () => {
  const settings: import("react-slick").Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: CommunityData.length < 3 ? CommunityData.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/4 mx-auto mt-16">
      <Slider {...settings}>
        {CommunityData.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div
              className="bg-white rounded-2xl shadow-lg p-8 mx-2 my-4 
                          transform hover:scale-105 transition-all duration-300 
                          hover:shadow-xl border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
                              flex items-center justify-center shadow-md"
                >
                  <img
                    src="/img/icons8-get-quote-100-colorWhite.png"
                    className="w-8 h-8 opacity-90"
                    alt="Quote icon"
                  />
                </div>
              </div>

              {/* Review Text */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8 
                          font-normal italic"
              >
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center border-t pt-6 mt-6">
                <div className="relative">
                  <img
                    src={`/img/${testimonial.img}`}
                    alt={`Profile picture of ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 
                              border-blue-100 shadow-sm"
                  />
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 
                                bg-blue-500 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">Người dùng</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommunitySlider;

```

### 📄 src/components/public-pages/Hero/Hero.tsx

```
const Hero = () => {
    return (
      <section className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Finance Tracker</h2>
          <p className="text-lg mb-8">Discover amazing features and functionalities.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
```

### 📄 src/components/common/ui/progress.tsx

```
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../../../config/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-gray-200",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-blue-500 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

### 📄 src/components/common/ui/card.tsx

```
import * as React from "react";

import { cn } from "../../../config/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

```

### 📄 src/pages/dashboard/Sidebar.tsx

```
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Target,
  BarChart2,
  Wallet,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { SidebarProps, NavItem } from "../../types/props";

export const Sidebar: FC<SidebarProps> = ({
  activeItem,
  setActiveItem,
  isExpanded,
  setIsExpanded,
}) => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard size={24} />,
      text: "Tổng quan",
      href: "/dashboard",
      description: "Xem tóm tắt và thông tin tài chính của bạn",
    },
    {
      icon: <DollarSign size={24} />,
      text: "Giao dịch",
      href: "/dashboard/transactions",
      description: "Theo dõi thu nhập và chi tiêu",
    },
    {
      icon: <Wallet size={24} />,
      text: "Ngân sách",
      href: "/dashboard/budget",
      description: "Thiết lập và giám sát hạn mức chi tiêu",
    },
    {
      icon: <Target size={24} />,
      text: "Mục tiêu",
      href: "/dashboard/goals",
      description: "Theo dõi mục tiêu tiết kiệm",
    },
  ];

  const bottomNavItems: NavItem[] = [
    {
      icon: <Settings size={24} />,
      text: "Cài đặt",
      href: "/dashboard/settings",
      description: "Tùy chỉnh theo sở thích của bạn",
    },
  ];

  const NavItemComponent: FC<{
    item: NavItem;
    index: number;
  }> = ({ item, index }) => (
    <div className="relative group">
      <Link
        to={item.href}
        className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200
          ${
            location.pathname === item.href
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }
          ${isExpanded ? "" : "justify-center"}`}
        onClick={() => setActiveItem(item.text)}
      >
        <div className={`flex items-center ${isExpanded ? "w-full" : ""}`}>
          <span className="flex-shrink-0">{item.icon}</span>
          {isExpanded && (
            <span className="ml-3 text-sm font-medium">{item.text}</span>
          )}
        </div>

        {/* Enhanced Tooltip */}
        {!isExpanded && (
          <div className="invisible group-hover:visible absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap z-50">
            <div className="font-medium">{item.text}</div>
            <div className="text-xs text-gray-300 mt-1">{item.description}</div>
            <div
              className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 
              border-4 border-transparent border-r-gray-900"
            ></div>
          </div>
        )}
      </Link>
    </div>
  );

  return (
    <nav
      className={`bg-white shadow-lg fixed h-full z-40 flex flex-col justify-between 
      transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}
    >
      {/* Logo and Brand */}
      <div>
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <img src="/icon.png" alt="Logo" className="w-10 h-10" />
            {isExpanded && (
              <span className="ml-3 font-bold text-xl text-gray-800">
                FinanceTracker
              </span>
            )}
          </div>
        </div>

        {/* Search Bar - Only when expanded */}
        {isExpanded && (
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm nhanh..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
        )}

        {/* Main Navigation Items */}
        <div className="px-2 py-2 space-y-1">
          {navItems.map((item, index) => (
            <NavItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation Items */}
      <div className="border-t">
        <div className="px-2 py-2 space-y-1">
          {bottomNavItems.map((item, index) => (
            <NavItemComponent
              key={`bottom-${index}`}
              item={item}
              index={navItems.length + index}
            />
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 
          bg-white rounded-full p-1.5 border shadow-md hover:shadow-lg 
          transition-shadow duration-200"
          title={isExpanded ? "Thu gọn thanh bên" : "Mở rộng thanh bên"}
        >
          {isExpanded ? (
            <ChevronLeft size={16} className="text-gray-600" />
          ) : (
            <ChevronRight size={16} className="text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;

```

### 📄 src/pages/dashboard/Dashboard.tsx

```
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

   useEffect(() => {
     // Redirect to dashboard overview if at /dashboard
     if (location.pathname === "/dashboard") {
       setActiveItem("Dashboard");
     }
   }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarExpanded={isSidebarExpanded} />
        <main
          className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
            isSidebarExpanded ? "ml-64" : "ml-20"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

```

### 📄 src/pages/dashboard/Header.tsx

```
import { FC, useState } from "react";
import { Bell, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import { HeaderProps } from "../../types/props";

export const Header: FC<HeaderProps> = ({ isSidebarExpanded }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      navigate("/login");
    }
  };

  return (
    <header
      className={`bg-white shadow-md p-4 flex items-center justify-between 
            transition-all duration-300 ${
              isSidebarExpanded ? "ml-64" : "ml-20"
            }`}
    >
      <div className="w-1/4"></div>
      <div className="w-1/4 flex items-center justify-end space-x-4">
        {/* <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
          <Bell size={24} className="text-gray-600" />
        </button> */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative focus:outline-none"
          >
            <User
              size={40}
              className="p-2 rounded-full cursor-pointer hover:bg-gray-200 text-gray-600 transition-all duration-200"
            />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              ></div>

              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-20 py-2 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/avatar.png"
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user?.username || "User"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsProfileModalOpen(true);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <User size={16} />
                    <span>Edit Profile</span>
                  </button>

                  <div className="border-t border-gray-200 my-1"></div>

                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

```

### 📄 src/pages/dashboard/Goals/GoalFormModal.tsx

```
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Goal {
  id?: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

interface GoalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Goal, "id">) => void;
  initialData?: Goal | null;
}

const GoalFormModal: React.FC<GoalFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<Omit<Goal, "id">>({
    name: "",
    targetAmount: 0,
    currentAmount: 0,
    deadline: new Date().toISOString().split("T")[0],
    color: "bg-blue-500",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        targetAmount: initialData.targetAmount,
        currentAmount: initialData.currentAmount,
        deadline: initialData.deadline,
        color: initialData.color,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? "Chỉnh sửa mục tiêu" : "Thêm mục tiêu mới"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên mục tiêu
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="VD: Mua nhà"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số tiền mục tiêu
            </label>
            <input
              type="number"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số tiền"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số tiền hiện tại
            </label>
            <input
              type="number"
              name="currentAmount"
              value={formData.currentAmount}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số tiền hiện có"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời hạn
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Màu sắc
            </label>
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-blue-500">Xanh dương</option>
              <option value="bg-green-500">Xanh lá</option>
              <option value="bg-purple-500">Tím</option>
              <option value="bg-pink-500">Hồng</option>
              <option value="bg-yellow-500">Vàng</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              {initialData ? "Cập nhật" : "Thêm mục tiêu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalFormModal;

```

### 📄 src/pages/dashboard/Goals/SavingsGoals.tsx

```
import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Target } from "lucide-react";
import { useGoals } from "../../../hooks/useGoals";
import GoalFormModal from "./GoalFormModal";
import { Card } from "../../../components/common/ui/card";
import { Progress } from "../../../components/common/ui/progress";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

const SavingsGoals = () => {
  const {
    goals,
    loading,
    error,
    fetchGoals,
    createGoal,
    updateGoal,
    deleteGoal,
  } = useGoals();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  const handleSubmit = async (data: Omit<Goal, 'id'>) => {
    try {
      if (selectedGoal) {
        await updateGoal(selectedGoal.id, data);
      } else {
        await createGoal(data);
      }
      setIsModalOpen(false);
      setSelectedGoal(null);
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      try {
        await deleteGoal(id);
      } catch (error) {
        console.error("Error deleting goal:", error);
      }
    }
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getTimeRemaining = (deadline: string) => {
    const remaining = Math.ceil(
      (new Date(deadline).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return remaining > 0 ? `${remaining} ngày` : "Đã hết hạn";
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">Error loading goals: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mục tiêu tiết kiệm</h2>
        <button
          onClick={() => {
            setSelectedGoal(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Thêm mục tiêu
        </button>
      </div>

      {loading && !goals.length ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <Card key={goal.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Target
                    className={`w-8 h-8 ${goal.color} text-white p-1.5 rounded-full mr-3`}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{goal.name}</h3>
                    <p className="text-sm text-gray-500">
                      Còn {getTimeRemaining(goal.deadline)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedGoal(goal);
                      setIsModalOpen(true);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{formatCurrency(goal.currentAmount)}</span>
                    <span>{formatCurrency(goal.targetAmount)}</span>
                  </div>
                  <Progress
                    value={calculateProgress(
                      goal.currentAmount,
                      goal.targetAmount
                    )}
                    className="h-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {calculateProgress(
                      goal.currentAmount,
                      goal.targetAmount
                    ).toFixed(1)}
                    % hoàn thành
                  </p>
                </div>

                <div className="pt-4 border-t grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setSelectedGoal({
                        ...goal,
                        currentAmount: goal.currentAmount + 1000000,
                      });
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                  >
                    Thêm tiền
                  </button>
                  <button
                    onClick={() => {
                      setSelectedGoal(goal);
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    Điều chỉnh
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {isModalOpen && (
        <GoalFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedGoal(null);
          }}
          onSubmit={handleSubmit}
          initialData={selectedGoal}
        />
      )}
    </div>
  );
};

export default SavingsGoals;

```

### 📄 src/pages/dashboard/Transactions/TransactionForm.tsx

```
import React from "react";
import { useForm } from "react-hook-form";
import {
  Transaction,
  TransactionFormData,
  TransactionType,
} from "../../../types/transaction";
import { X } from "lucide-react";

interface TransactionFormProps {
  initialData?: Partial<Transaction>;
  onSubmit: (data: TransactionFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TransactionFormData>({
    defaultValues: {
      type: (initialData?.type as TransactionType) || "EXPENSE",
      date: initialData?.date || new Date().toISOString().split("T")[0],
      amount: initialData?.amount || 0,
      description: initialData?.description || "",
      category: initialData?.category || "",
      paymentMethod: initialData?.paymentMethod || "",
      notes: initialData?.notes || "",
      status: initialData?.status || "COMPLETED",
    },
  });

  const transactionType = watch("type");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>

      {/* Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label
            className={`
            flex items-center justify-center p-2 rounded-md cursor-pointer
            ${
              transactionType === "INCOME"
                ? "bg-green-100 text-green-800 ring-2 ring-green-500"
                : "bg-gray-100 text-gray-800"
            }
          `}
          >
            <input
              type="radio"
              {...register("type")}
              value="INCOME"
              className="sr-only"
            />
            <span>Income</span>
          </label>
          <label
            className={`
            flex items-center justify-center p-2 rounded-md cursor-pointer
            ${
              transactionType === "EXPENSE"
                ? "bg-red-100 text-red-800 ring-2 ring-red-500"
                : "bg-gray-100 text-gray-800"
            }
          `}
          >
            <input
              type="radio"
              {...register("type")}
              value="EXPENSE"
              className="sr-only"
            />
            <span>Expense</span>
          </label>
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            ₫
          </span>
          <input
            type="number"
            {...register("amount", { required: "Amount is required", min: 0 })}
            className={`
              pl-8 w-full rounded-md border ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            `}
          />
        </div>
        {errors.amount && (
          <p className="mt-1 text-xs text-red-500">{errors.amount.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          {...register("description", { required: "Description is required" })}
          className={`
            w-full rounded-md border ${
              errors.description ? "border-red-500" : "border-gray-300"
            }
            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          `}
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          {...register("category", { required: "Category is required" })}
          className={`
            w-full rounded-md border ${
              errors.category ? "border-red-500" : "border-gray-300"
            }
            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          `}
        >
          <option value="">Select category</option>
          <option value="Food & Dining">Food & Dining</option>
          <option value="Shopping">Shopping</option>
          <option value="Housing">Housing</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Income">Income</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          {...register("date", { required: "Date is required" })}
          className={`
            w-full rounded-md border ${
              errors.date ? "border-red-500" : "border-gray-300"
            }
            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          `}
        />
        {errors.date && (
          <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Payment Method */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Payment Method
        </label>
        <select
          {...register("paymentMethod", {
            required: "Payment method is required",
          })}
          className={`
            w-full rounded-md border ${
              errors.paymentMethod ? "border-red-500" : "border-gray-300"
            }
            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          `}
        >
          <option value="">Select payment method</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="E-Wallet">E-Wallet</option>
          <option value="Other">Other</option>
        </select>
        {errors.paymentMethod && (
          <p className="mt-1 text-xs text-red-500">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notes
        </label>
        <textarea
          {...register("notes")}
          rows={3}
          className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={`
            px-4 py-2 text-sm font-medium text-white rounded-md
            ${
              isLoading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }
            transition-colors duration-200
          `}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Save Transaction"
          )}
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;

```

### 📄 src/pages/dashboard/Transactions/TransactionFilters.tsx

```
import React, { useState } from "react";
import { TransactionType } from "../../../types/transaction";

export interface FilterCriteria {
  startDate?: string;
  endDate?: string;
  type?: TransactionType;
  category?: string;
  minAmount?: number;
  maxAmount?: number;
}

interface TransactionFiltersProps {
  onFilterChange: (filters: Partial<FilterCriteria>) => void;
  disabled?: boolean;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  onFilterChange,
  disabled = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let filterValue: string | number | undefined = value;

    // Convert amount values to numbers
    if (name.includes("Amount") && value) {
      filterValue = parseFloat(value);
    }

    // Only update if value is not empty
    onFilterChange({
      [name]: value ? filterValue : undefined,
    });
  };

  const categories = [
    "Food & Dining",
    "Shopping",
    "Housing",
    "Transportation",
    "Utilities",
    "Healthcare",
    "Entertainment",
    "Education",
    "Income",
    "Other",
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-indigo-600 hover:text-indigo-800"
          disabled={disabled}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            onChange={handleFilterChange}
            disabled={disabled}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            onChange={handleFilterChange}
            disabled={disabled}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            name="type"
            onChange={handleFilterChange}
            disabled={disabled}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All</option>
            <option value="INCOME">Income</option>
            <option value="EXPENSE">Expense</option>
          </select>
        </div>

        {isExpanded && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                onChange={handleFilterChange}
                disabled={disabled}
                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Amount
              </label>
              <input
                type="number"
                name="minAmount"
                onChange={handleFilterChange}
                disabled={disabled}
                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Amount
              </label>
              <input
                type="number"
                name="maxAmount"
                onChange={handleFilterChange}
                disabled={disabled}
                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionFilters;

```

### 📄 src/pages/dashboard/Transactions/TransactionList.tsx

```
import React from "react";
import { Edit2, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { format } from "date-fns";

const TransactionList = ({
  transactions,
  onEdit,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalItems,
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryStyle = (category) => {
    const colors = {
      "Food & Dining": "bg-orange-100 text-orange-800",
      Shopping: "bg-blue-100 text-blue-800",
      Housing: "bg-purple-100 text-purple-800",
      Transportation: "bg-green-100 text-green-800",
      Utilities: "bg-gray-100 text-gray-800",
      Healthcare: "bg-red-100 text-red-800",
      Entertainment: "bg-pink-100 text-pink-800",
      Education: "bg-cyan-100 text-cyan-800",
      Income: "bg-emerald-100 text-emerald-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(pageSize)].map((_, i) => (
          <div key={i} className="bg-gray-100 animate-pulse rounded-lg h-16" />
        ))}
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Không có giao dịch nào</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Ngày
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Mô tả
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Danh mục
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Số tiền
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Phương thức
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Trạng thái
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
              >
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {format(new Date(transaction.date), "dd/MM/yyyy")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === "INCOME" ? (
                      <ArrowUp className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500 mr-2" />
                    )}
                    <span className="text-sm text-gray-900">
                      {transaction.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyle(
                      transaction.category
                    )}`}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={
                      transaction.type === "INCOME"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {transaction.type === "INCOME" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(transaction)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(transaction.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50"
              }`}
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50"
              }`}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * pageSize + 1}
              </span>{" "}
              -{" "}
              <span className="font-medium">
                {Math.min(currentPage * pageSize, totalItems)}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="text-sm border-gray-300 rounded-md"
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium
                  ${
                    currentPage === 1
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
              >
                First
              </button>
              {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                const isCurrentPage = pageNumber === currentPage;
                const isNearCurrentPage =
                  Math.abs(pageNumber - currentPage) <= 1;
                const showEllipsis =
                  !isNearCurrentPage && (idx === 1 || idx === totalPages - 2);

                if (!isNearCurrentPage && !showEllipsis) return null;

                return showEllipsis ? (
                  <span
                    key={idx}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={idx}
                    onClick={() => onPageChange(pageNumber)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                      ${
                        isCurrentPage
                          ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium
                  ${
                    currentPage === totalPages
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
              >
                Last
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;

```

### 📄 src/pages/dashboard/Transactions/TransactionImport.tsx

```
import React, { useState } from "react";
import { Upload, CheckCircle, AlertCircle, X } from "lucide-react";
import Papa from "papaparse";
import { Card } from "../../../components/common/ui/card";

const TransactionImport = ({ onImport, onClose }) => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [error, setError] = useState("");
  const [importing, setImporting] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleFile = (file) => {
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file");
      return;
    }

    setFile(file);
    setError("");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      preview: 5, // Preview first 5 rows
      complete: function (results) {
        // Validate required columns
        const requiredColumns = [
          "date",
          "amount",
          "description",
          "category",
          "type",
        ];
        const hasRequiredColumns = requiredColumns.every((col) =>
          results.meta.fields.includes(col)
        );

        if (!hasRequiredColumns) {
          setError(
            "CSV file must contain the following columns: date, amount, description, category, type"
          );
          return;
        }

        setPreviewData(results.data);
      },
      error: function (error) {
        setError("Error parsing CSV file: " + error.message);
      },
    });
  };

  const handleImport = async () => {
    try {
      setImporting(true);

      // Parse full file
      const parsePromise = new Promise((resolve, reject) => {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: resolve,
          error: reject,
        });
      });

      const results = await parsePromise;

      // Transform data to match your transaction format
      const transformedData = results.data.map((row) => ({
        date: row.date,
        amount: parseFloat(row.amount),
        description: row.description,
        category: row.category,
        type: row.type.toUpperCase(),
        paymentMethod: row.paymentMethod || "CASH",
        notes: row.notes || "",
      }));

      await onImport(transformedData);
      onClose();
    } catch (error) {
      setError("Error importing transactions: " + error.message);
    } finally {
      setImporting(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Import Transactions</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Drop your CSV file here or</p>
        <label className="inline-block">
          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100">
            Browse files
          </span>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
        <p className="text-sm text-gray-500 mt-2">
          File must be in CSV format with columns: date, amount, description,
          category, type
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Preview */}
      {previewData.length > 0 && !error && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">Preview (First 5 rows)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(previewData[0]).map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewData.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((cell, j) => (
                      <td
                        key={j}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleImport}
          disabled={!file || error || importing}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md
            ${
              !file || error || importing
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {importing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Importing...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Import
            </>
          )}
        </button>
      </div>
    </Card>
  );
};

export default TransactionImport;

```

### 📄 src/pages/dashboard/Transactions/Transactions.tsx

```
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Plus, Upload } from "lucide-react";
import axiosInstance from "../../../config/axiosConfig";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import TransactionImport from "./TransactionImport";

const Transactions = () => {
  // State Management
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch transactions with pagination
  const fetchTransactions = async (page = currentPage, size = pageSize) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/transactions", {
        params: {
          page: page - 1, // Backend uses 0-based pagination
          size,
          sort: "date,desc",
        },
      });
      setTransactions(response.data.content);
      setTotalItems(response.data.totalElements);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Failed to fetch transactions");
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [currentPage, pageSize]);

  // Handle Transactions
  const handleCreateTransaction = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/transactions", data);
      toast.success("Transaction created successfully");
      handleCloseModal();
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to create transaction");
      console.error("Error creating transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTransaction = async (id, data) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/api/transactions/${id}`, data);
      toast.success("Transaction updated successfully");
      handleCloseModal();
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to update transaction");
      console.error("Error updating transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTransaction = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    try {
      setLoading(true);
      await axiosInstance.delete(`/api/transactions/${id}`);
      toast.success("Transaction deleted successfully");
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to delete transaction");
      console.error("Error deleting transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Import
  const handleImportTransactions = async (importedData) => {
    try {
      setLoading(true);
      await axiosInstance.post("/api/transactions/bulk", importedData);
      toast.success("Transactions imported successfully");
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to import transactions");
      console.error("Error importing transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Modal Handlers
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  // Pagination Handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Giao dịch</h1>
          <p className="mt-1 text-sm text-gray-500">
            Quản lý các giao dịch thu chi
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsImportOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Upload className="w-4 h-4" />
            <span>Nhập từ file</span>
          </button>
          <button
            onClick={() => {
              setSelectedTransaction(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm giao dịch</span>
          </button>
        </div>
      </div>

      {/* Transaction List with Pagination */}
      <TransactionList
        transactions={transactions}
        onEdit={(transaction) => {
          setSelectedTransaction(transaction);
          setIsModalOpen(true);
        }}
        onDelete={handleDeleteTransaction}
        isLoading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        totalItems={totalItems}
      />

      {/* Transaction Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedTransaction
                ? "Chỉnh sửa giao dịch"
                : "Thêm giao dịch mới"}
            </h2>
            <TransactionForm
              initialData={selectedTransaction}
              onSubmit={(data) => {
                if (selectedTransaction) {
                  handleUpdateTransaction(selectedTransaction.id, data);
                } else {
                  handleCreateTransaction(data);
                }
              }}
              onCancel={handleCloseModal}
              isLoading={loading}
            />
          </div>
        </div>
      )}

      {/* Import Modal */}
      {isImportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <TransactionImport
              onImport={handleImportTransactions}
              onClose={() => setIsImportOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;

```

### 📄 src/pages/dashboard/Budget/Budget.tsx

```
import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, AlertCircle } from "lucide-react";
import { useBudgets } from "../../../hooks/useBudgets";
import { BudgetForm } from "./BudgetForm";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import { BudgetFormData } from "../../../types/budget";

export const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<
    (BudgetFormData & { id?: number }) | undefined
  >(undefined);
  const {
    budgets,
    loading,
    error,
    fetchBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
  } = useBudgets();

  useEffect(() => {
    fetchBudgets();
  }, [fetchBudgets]);

  const handleSubmit = async (data: BudgetFormData) => {
    try {
      if (selectedBudget?.id) {
        await updateBudget(selectedBudget.id, data);
      } else {
        await createBudget(data);
      }
      setIsModalOpen(false);
      setSelectedBudget(undefined);
    } catch (err) {
      console.error("Error submitting budget:", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      try {
        await deleteBudget(id);
      } catch (err) {
        console.error("Error deleting budget:", err);
      }
    }
  };

  if (error) {
    return (
      <div className="p-4 text-center">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => fetchBudgets()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý ngân sách</h1>
          <p className="mt-1 text-sm text-gray-500">
            Quản lý và theo dõi hạn mức chi tiêu của bạn
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedBudget(undefined);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          <Plus className="mr-2" size={20} />
          Thêm ngân sách
        </button>
      </div>

      {loading && !budgets.length ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100;
            const isOverBudget = percentage > 100;
            const isNearLimit = percentage > 80 && percentage <= 100;

            return (
              <div
                key={budget.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {budget.category}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedBudget(budget);
                          setIsModalOpen(true);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(budget.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Đã chi</span>
                      <span>{`${percentage.toFixed(1)}%`}</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isOverBudget
                            ? "bg-red-500"
                            : isNearLimit
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>

                    <div className="mt-3 flex justify-between items-baseline">
                      <span className="text-2xl font-bold">
                        {budget.spent.toLocaleString("vi-VN")} ₫
                      </span>
                      <span className="text-gray-500">
                        trong {budget.limit.toLocaleString("vi-VN")} ₫
                      </span>
                    </div>

                    {(isOverBudget || isNearLimit) && (
                      <div
                        className={`mt-3 flex items-center text-sm ${
                          isOverBudget ? "text-red-600" : "text-yellow-600"
                        }`}
                      >
                        <AlertCircle size={16} className="mr-1" />
                        <span>
                          {isOverBudget ? "Vượt quá ngân sách!" : "Sắp đến hạn mức"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Kỳ hạn</span>
                      <span>{budget.period}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Cập nhật lần cuối</span>
                      <span>
                        {new Date(budget.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedBudget ? "Sửa ngân sách" : "Thêm ngân sách"}
            </h2>
            <BudgetForm
              initialData={selectedBudget}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsModalOpen(false);
                setSelectedBudget(undefined);
              }}
              isLoading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

```

### 📄 src/pages/dashboard/Budget/BudgetForm.tsx

```
import React from "react";
import { useForm } from "react-hook-form";
import {
  BudgetFormData,
  BudgetPeriod,
  BUDGET_CATEGORIES,
  budgetValidationSchema,
  getDateRangeForPeriod,
} from "../../../types/budget";

interface BudgetFormProps {
  initialData?: BudgetFormData;
  onSubmit: (data: BudgetFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export const BudgetForm: React.FC<BudgetFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BudgetFormData>({
    defaultValues: initialData || {
      period: "MONTHLY" as BudgetPeriod,
      ...getDateRangeForPeriod("MONTHLY"),
    },
  });

  // Watch period to update date range
  const selectedPeriod = watch("period");

  // Update date range when period changes
  React.useEffect(() => {
    if (!initialData) {
      const { startDate, endDate } = getDateRangeForPeriod(
        selectedPeriod as BudgetPeriod
      );
      setValue("startDate", startDate);
      setValue("endDate", endDate);
    }
  }, [selectedPeriod, initialData, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Danh mục
        </label>
        <select
          {...register("category", budgetValidationSchema.category)}
          className={`w-full rounded-md border ${
            errors.category ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        >
          <option value="">Chọn danh mục</option>
          {BUDGET_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Limit Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hạn mức ngân sách
        </label>
        <div className="relative">
          <input
            type="number"
            {...register("limit", budgetValidationSchema.limit)}
            className={`w-full pl-8 rounded-md border ${
              errors.limit ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="0"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            ₫
          </span>
        </div>
        {errors.limit && (
          <p className="mt-1 text-xs text-red-500">{errors.limit.message}</p>
        )}
      </div>

      {/* Period */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kỳ hạn
        </label>
        <select
          {...register("period", budgetValidationSchema.period)}
          className={`w-full rounded-md border ${
            errors.period ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        >
          <option value="WEEKLY">Hàng tuần</option>
          <option value="MONTHLY">Hàng tháng</option>
          <option value="YEARLY">Hàng năm</option>
        </select>
        {errors.period && (
          <p className="mt-1 text-xs text-red-500">{errors.period.message}</p>
        )}
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ngày bắt đầu
          </label>
          <input
            type="date"
            {...register("startDate", budgetValidationSchema.startDate)}
            className={`w-full rounded-md border ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {errors.startDate && (
            <p className="mt-1 text-xs text-red-500">
              {errors.startDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ngày kết thúc
          </label>
          <input
            type="date"
            {...register("endDate", budgetValidationSchema.endDate)}
            className={`w-full rounded-md border ${
              errors.endDate ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {errors.endDate && (
            <p className="mt-1 text-xs text-red-500">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          disabled={isLoading}
        >
          Hủy
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md
                        ${
                          isLoading
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }
                    `}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Đang lưu...
            </div>
          ) : (
            "Lưu ngân sách"
          )}
        </button>
      </div>
    </form>
  );
};

```

### 📄 src/pages/dashboard/Setting/ProfileSettings.tsx

```
import React from "react";
import { Loader2, Save } from "lucide-react";
import { UserProfile } from "../../../types/settings";

interface ProfileSettingsProps {
  profile?: UserProfile;
  onUpdate: (data: UserProfile) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof UserProfile, value: string) => void;
}

const defaultProfile: UserProfile = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  profile = defaultProfile,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(profile);
  };

  // Use profile prop if available, otherwise use default values
  const currentProfile = {
    ...defaultProfile,
    ...profile,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Thông tin cá nhân</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <input
            type="text"
            value={currentProfile.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={currentProfile.email || ""}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <input
            type="tel"
            value={currentProfile.phone || ""}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Địa chỉ
          </label>
          <input
            type="text"
            value={currentProfile.address || ""}
            onChange={(e) => onChange("address", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang lưu...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Lưu thay đổi
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfileSettings;

```

### 📄 src/pages/dashboard/Setting/PreferencesSettings.tsx

```
import React from "react";
import { Loader2, Save } from "lucide-react";
import {
  Preferences,
  CURRENCY_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FISCAL_MONTH_START_OPTIONS,
} from "../../../types/settings";

interface PreferencesSettingsProps {
  preferences?: Preferences;
  onUpdate: (data: Preferences) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof Preferences, value: Preferences[keyof Preferences]) => void;
}

const defaultPreferences: Preferences = {
  currency: "VND",
  fiscalMonthStartDay: 1,
  dateFormat: "DD/MM/YYYY",
  darkMode: false,
};

const PreferencesSettings: React.FC<PreferencesSettingsProps> = ({
  preferences = defaultPreferences,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(preferences);
  };

  // Use preferences prop if available, otherwise use default values
  const currentPreferences = preferences || defaultPreferences;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Tùy chọn</h3>

      <div className="space-y-4">
        {/* Currency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Đơn vị tiền tệ
          </label>
          <select
            value={currentPreferences.currency}
            onChange={(e) => onChange("currency", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {CURRENCY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fiscal Month Start Day */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngày bắt đầu tháng tài chính
          </label>
          <select
            value={currentPreferences.fiscalMonthStartDay}
            onChange={(e) =>
              onChange("fiscalMonthStartDay", parseInt(e.target.value))
            }
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {FISCAL_MONTH_START_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Định dạng ngày
          </label>
          <select
            value={currentPreferences.dateFormat}
            onChange={(e) => onChange("dateFormat", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {DATE_FORMAT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentPreferences.darkMode}
              onChange={(e) => onChange("darkMode", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang lưu...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Lưu thay đổi
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default PreferencesSettings;

```

### 📄 src/pages/dashboard/Setting/Settings.tsx

```
import React, { useState, useEffect } from "react";
import { Card } from "../../../components/common/ui/card";
import { Loader2 } from "lucide-react";
import { useSettings } from "../../../hooks/useSettings";
import { toast } from "react-toastify";
import {
  UserProfile,
  NotificationSettings as NotificationSettingsType,
  Preferences,
  UpdatePasswordRequest,
} from "../../../types/settings";

import SettingTabs from "./SettingTabs";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import PreferencesSettings from "./PreferencesSettings";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const {
    loading,
    error,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateNotifications,
    updatePreferences,
    handleProfileChange,
    handleNotificationsChange,
    handlePreferencesChange,
    currentProfile,
    currentNotifications,
    currentPreferences,
  } = useSettings();

  useEffect(() => {
    const loadSettings = async () => {
      try {
        await fetchSettings();
      } catch (err) {
        console.error("Failed to fetch settings:", err);
        toast.error("Failed to load settings");
      }
    };
    loadSettings();
  }, [fetchSettings]);

  const handleProfileUpdate = async (profileData: UserProfile) => {
    try {
      setIsSaving(true);
      await updateProfile(profileData);
      toast.success("Profile updated successfully");
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSecurityUpdate = async (data: UpdatePasswordRequest) => {
    try {
      setIsSaving(true);
      await updatePassword(data);
      toast.success("Password updated successfully");
    } catch (err) {
      console.error("Failed to update password:", err);
      toast.error("Failed to update password");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationsUpdate = async (data: NotificationSettingsType) => {
    try {
      setIsSaving(true);
      await updateNotifications(data);
      toast.success("Notifications updated successfully");
    } catch (err) {
      console.error("Failed to update notifications:", err);
      toast.error("Failed to update notifications");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreferencesUpdate = async (data: Preferences) => {
    try {
      setIsSaving(true);
      await updatePreferences(data);
      toast.success("Preferences updated successfully");
    } catch (err) {
      console.error("Failed to update preferences:", err);
      toast.error("Failed to update preferences");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-600 bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold">Error loading settings</h3>
          <p>{error}</p>
          <button
            onClick={() => fetchSettings()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Cài đặt</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <SettingTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1">
          <Card className="p-6">
            {activeTab === "profile" && (
              <ProfileSettings
                profile={currentProfile()}
                onUpdate={handleProfileUpdate}
                onChange={handleProfileChange}
                isSaving={isSaving}
              />
            )}

            {activeTab === "security" && (
              <SecuritySettings
                onUpdate={handleSecurityUpdate}
                isSaving={isSaving}
              />
            )}

            {activeTab === "notifications" && (
              <NotificationSettings
                notifications={currentNotifications()}
                onUpdate={handleNotificationsUpdate}
                onChange={handleNotificationsChange}
                isSaving={isSaving}
              />
            )}

            {activeTab === "preferences" && (
              <PreferencesSettings
                preferences={currentPreferences()}
                onUpdate={handlePreferencesUpdate}
                onChange={handlePreferencesChange}
                isSaving={isSaving}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;

```

### 📄 src/pages/dashboard/Setting/SecuritySettings.tsx

```
import React, { useState } from "react";
import { Loader2, Save, Eye, EyeOff } from "lucide-react";

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface SecuritySettingsProps {
  onUpdate: (data: {
    currentPassword: string;
    newPassword: string;
  }) => Promise<void>;
  isSaving: boolean;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  onUpdate,
  isSaving,
}) => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [formData, setFormData] = useState<SecurityFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      // Handle password mismatch
      return;
    }
    await onUpdate({
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    });
    // Reset form after successful update
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleChange = (field: keyof SecurityFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Bảo mật</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mật khẩu hiện tại
          </label>
          <div className="relative mt-1">
            <input
              type={showPasswords.current ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e) => handleChange("currentPassword", e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() =>
                setShowPasswords((prev) => ({
                  ...prev,
                  current: !prev.current,
                }))
              }
            >
              {showPasswords.current ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mật khẩu mới
          </label>
          <div className="relative mt-1">
            <input
              type={showPasswords.new ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() =>
                setShowPasswords((prev) => ({
                  ...prev,
                  new: !prev.new,
                }))
              }
            >
              {showPasswords.new ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Xác nhận mật khẩu mới
          </label>
          <div className="relative mt-1">
            <input
              type={showPasswords.confirm ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() =>
                setShowPasswords((prev) => ({
                  ...prev,
                  confirm: !prev.confirm,
                }))
              }
            >
              {showPasswords.confirm ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang cập nhật...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Cập nhật mật khẩu
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default SecuritySettings;

```

### 📄 src/pages/dashboard/Setting/SettingTabs.tsx

```
import React from "react";
import { User, Lock, Bell, Settings as SettingsIcon } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

interface SettingTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  {
    id: "profile",
    label: "Thông tin cá nhân",
    icon: User,
    description: "Cập nhật thông tin cá nhân của bạn",
  },
  {
    id: "security",
    label: "Bảo mật",
    icon: Lock,
    description: "Thay đổi mật khẩu và cài đặt bảo mật",
  },
  {
    id: "notifications",
    label: "Thông báo",
    icon: Bell,
    description: "Quản lý cài đặt thông báo",
  },
  {
    id: "preferences",
    label: "Tùy chọn",
    icon: SettingsIcon,
    description: "Tùy chỉnh giao diện và các tùy chọn khác",
  },
];

const SettingTabs: React.FC<SettingTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full md:w-64 space-y-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors relative group
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : ""}`} />
            <div>
              <span className="font-medium block">{tab.label}</span>
              <span className="text-sm text-gray-500 hidden group-hover:block">
                {tab.description}
              </span>
            </div>

            {isActive && (
              <div className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-r" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SettingTabs;

```

### 📄 src/pages/dashboard/Setting/NotificationSettings.tsx

```
import React from "react";
import { Loader2, Save } from "lucide-react";
import { NotificationSettings as NotificationSettingsType } from "../../../types/settings";

interface NotificationSettingsProps {
  notifications?: NotificationSettingsType;
  onUpdate: (data: NotificationSettingsType) => Promise<void>;
  isSaving: boolean;
  onChange: (field: keyof NotificationSettingsType, value: boolean) => void;
}

const defaultNotifications: NotificationSettingsType = {
  emailNotifications: true,
  budgetAlerts: true,
  transactionNotifications: true,
};

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  notifications = defaultNotifications,
  onUpdate,
  isSaving,
  onChange,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(notifications);
  };

  // Use notifications prop if available, otherwise use default values
  const currentNotifications = {
    ...defaultNotifications,
    ...notifications,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">Thông báo</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo Email</h4>
            <p className="text-sm text-gray-500">Nhận thông báo qua email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.emailNotifications}
              onChange={(e) => onChange("emailNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo ngân sách</h4>
            <p className="text-sm text-gray-500">
              Thông báo khi gần đến hạn mức
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.budgetAlerts}
              onChange={(e) => onChange("budgetAlerts", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h4 className="font-medium">Thông báo giao dịch</h4>
            <p className="text-sm text-gray-500">
              Thông báo khi có giao dịch mới
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentNotifications.transactionNotifications}
              onChange={(e) =>
                onChange("transactionNotifications", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang lưu...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Lưu thay đổi
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NotificationSettings;

```

### 📄 src/pages/dashboard/Setting/index.ts

```
export { default as Settings } from "./Settings";
export { default as ProfileSettings } from "./ProfileSettings";
export { default as SecuritySettings } from "./SecuritySettings";
export { default as NotificationSettings } from "./NotificationSettings";
export { default as PreferencesSettings } from "./PreferencesSettings";
export { default as SettingTabs } from "./SettingTabs";

```

### 📄 src/pages/dashboard/Dashboard/types.ts

```
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

```

### 📄 src/pages/dashboard/Dashboard/DashboardOverview.tsx

```
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
      <InsightsAlerts alerts={data.alerts} data={data.overview} />
    </div>
  );
};

export default DashboardOverview;

```

### 📄 src/pages/dashboard/Dashboard/components/ReportExporter.tsx

```
import { useState } from "react";
import { Download, FileText, FileSpreadsheet, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { RefObject } from "react";
import { DashboardData, Period } from "../types";

interface ReportExporterProps {
  dashboardRef: RefObject<HTMLDivElement>;
  data: DashboardData;
  period: Period;
}

const ReportExporter = ({ dashboardRef, data, period }: ReportExporterProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      setShowOptions(false); // Hide options before taking screenshot

      // Wait for options menu to disappear
      await new Promise((resolve) => setTimeout(resolve, 100));

      const element = dashboardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        x: 0,
        y: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      // Add title and date range
      pdf.setFontSize(20);
      pdf.text("Báo cáo tài chính", 40, 40);
      pdf.setFontSize(12);
      pdf.text(`Từ: ${period.startDate.toLocaleDateString("vi-VN")}`, 40, 60);
      pdf.text(`Đến: ${period.endDate.toLocaleDateString("vi-VN")}`, 40, 75);

      // Add the dashboard screenshot
      pdf.addImage(imgData, "PNG", 0, 100);

      pdf.save("finance-report.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  const handleExportExcel = () => {
    try {
      setIsExporting(true);

      // Prepare data for Excel
      const workbook = XLSX.utils.book_new();

      // Overview sheet
      const overviewData = [
        ["Tổng quan tài chính"],
        [
          "Khoảng thời gian",
          `${period.startDate.toLocaleDateString(
            "vi-VN"
          )} - ${period.endDate.toLocaleDateString("vi-VN")}`,
        ],
        [""],
        ["Chỉ số", "Giá trị"],
        ["Tổng số dư", formatCurrency(data.overview.totalBalance)],
        ["Thu nhập", formatCurrency(data.overview.monthlyIncome)],
        ["Chi tiêu", formatCurrency(data.overview.monthlyExpenses)],
        ["Tỷ lệ tiết kiệm", `${data.overview.savingsRate.toFixed(1)}%`],
      ];
      const overviewSheet = XLSX.utils.aoa_to_sheet(overviewData);
      XLSX.utils.book_append_sheet(workbook, overviewSheet, "Tổng quan");

      // Transactions by category sheet
      const categoryData = [
        ["Chi tiêu theo danh mục"],
        [""],
        ["Danh mục", "Số tiền", "Tỷ lệ"],
      ];
      data.expensesByCategory.forEach((cat) => {
        categoryData.push([
          cat.category,
          cat.amount,
          `${((cat.amount / data.overview.monthlyExpenses) * 100).toFixed(1)}%`,
        ]);
      });
      const categorySheet = XLSX.utils.aoa_to_sheet(categoryData);
      XLSX.utils.book_append_sheet(workbook, categorySheet, "Danh mục");

      // Monthly trends sheet
      const trendsData = [
        ["Xu hướng theo tháng"],
        [""],
        ["Tháng", "Thu nhập", "Chi tiêu"],
      ];
      data.trends.forEach((trend) => {
        trendsData.push([trend.month, trend.income, trend.expenses]);
      });
      const trendsSheet = XLSX.utils.aoa_to_sheet(trendsData);
      XLSX.utils.book_append_sheet(workbook, trendsSheet, "Xu hướng");

      // Save file
      XLSX.writeFile(workbook, "finance-report.xlsx");
    } catch (error) {
      console.error("Error exporting Excel:", error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
        disabled={isExporting}
      >
        {isExporting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Đang xuất...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo</span>
          </>
        )}
      </button>

      {showOptions && !isExporting && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-2 min-w-[200px] z-50">
          <button
            onClick={handleExportPDF}
            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md"
          >
            <FileText className="w-4 h-4" />
            <span>Xuất PDF</span>
          </button>
          <button
            onClick={handleExportExcel}
            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Xuất Excel</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportExporter;

```

### 📄 src/pages/dashboard/Dashboard/components/CategoryAnalysis.tsx

```
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
import { CategoryData } from "../types";

interface CategoryAnalysisProps {
  data: CategoryData[];
}

const CategoryAnalysis = ({ data }: CategoryAnalysisProps) => {
  const [selectedView, setSelectedView] = useState("chart"); // 'chart' or 'list'

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const totalExpenses = data.reduce((sum, item) => sum + item.amount, 0);

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
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  name,
                }) => {
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
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => formatCurrency(value)}
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
                className="h-2"
                indicatorClassName="transition-all"
                style={{ backgroundColor: category.color + "40" }}
                indicatorStyle={{ backgroundColor: category.color }}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default CategoryAnalysis;

```

### 📄 src/pages/dashboard/Dashboard/components/ExpenseTrends.tsx

```
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

interface TrendData {
  month: string;
  income: number;
  expenses: number;
}

const ExpenseTrends = ({ data }: { data: TrendData[] }) => {
  const formatCurrency = (value: number) => {
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
              formatter={(value) => formatCurrency(Number(value))}
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

```

### 📄 src/pages/dashboard/Dashboard/components/OverviewStats.tsx

```
import { Card } from "../../../../components/common/ui/card";
import { ArrowUp, ArrowDown, TrendingUp, DollarSign } from "lucide-react";
import { OverviewData, Period } from "../types";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

interface OverviewStatsProps {
  data: OverviewData;
  period: Period;
}

const OverviewStats = ({ data, period }: OverviewStatsProps) => {
  const periodText = getPeriodText(period.startDate, period.endDate);

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
            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <ArrowUp className="w-4 h-4" />
              <span>
                +
                {((data.monthlyIncome / data.monthlyExpenses - 1) * 100).toFixed(
                  1
                )}
                % so với chi tiêu
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

const getPeriodText = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.round((end - start) / (1000 * 60 * 60 * 24));

  if (days <= 7) return "7 ngày qua";
  if (days <= 30) return "30 ngày qua";
  if (days <= 90) return "Quý này";
  return "Tổng kết";
};

export default OverviewStats;

```

### 📄 src/pages/dashboard/Dashboard/components/InsightsAlerts.tsx

```
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

```

### 📄 src/pages/dashboard/Dashboard/components/DateRangePicker.tsx

```
import { useState } from "react";
import { Card } from "../../../../components/common/ui/card";
import { Calendar } from "lucide-react";
import { Period } from "../types";

interface DateRangePickerProps {
  onDateChange: (period: Period) => void;
}

const DateRangePicker = ({ onDateChange }: DateRangePickerProps) => {
  const [showQuickPicks, setShowQuickPicks] = useState(false);

  const quickPicks = [
    {
      label: "7 ngày qua",
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 7);
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "30 ngày qua",
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 30);
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "Quý này",
      getValue: () => {
        const now = new Date();
        const start = new Date(
          now.getFullYear(),
          Math.floor(now.getMonth() / 3) * 3,
          1
        );
        const end = new Date(
          now.getFullYear(),
          Math.floor(now.getMonth() / 3) * 3 + 3,
          0
        );
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "Năm nay",
      getValue: () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 1);
        const end = new Date(now.getFullYear(), 11, 31);
        return { startDate: start, endDate: end };
      },
    },
  ];

  const handleQuickPickSelect = (quickPick) => {
    const dateRange = quickPick.getValue();
    onDateChange(dateRange);
    setShowQuickPicks(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowQuickPicks(!showQuickPicks)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border hover:bg-gray-50"
      >
        <Calendar className="w-4 h-4" />
        <span>Chọn khoảng thời gian</span>
      </button>

      {showQuickPicks && (
        <Card className="absolute top-full mt-2 right-0 p-2 min-w-[200px] z-50">
          <div className="space-y-1">
            {quickPicks.map((pick, index) => (
              <button
                key={index}
                onClick={() => handleQuickPickSelect(pick)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md"
              >
                {pick.label}
              </button>
            ))}
          </div>
          <div className="border-t mt-2 pt-2">
            <div className="text-xs text-gray-500 mb-2">
              Hoặc chọn khoảng cụ thể:
            </div>
            <div className="space-y-2">
              <input
                type="date"
                onChange={(e) =>
                  onDateChange((prev) => ({
                    ...prev,
                    startDate: new Date(e.target.value),
                  }))
                }
                className="w-full p-2 border rounded-md text-sm"
              />
              <input
                type="date"
                onChange={(e) =>
                  onDateChange((prev) => ({
                    ...prev,
                    endDate: new Date(e.target.value),
                  }))
                }
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DateRangePicker;

```

### 📄 src/pages/public/LoginAndRegister/LoginForm.tsx

```
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginType } from "../../../types/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../config/AuthContext";
import axiosInstance from "../../../config/axiosConfig";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const BASE_URL = "/api/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit = async (data: LoginType) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(`${BASE_URL}/login`, data);
      toast.success("Login successful!");
      login(response.data.token, response.data.user);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 p-4 h-full max-w-7xl mx-auto">
        <div className="max-md:order-1 lg:col-span-2 w-full bg-[#000842] md:rounded-2xl lg:p-12 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto filter drop-shadow-xl"
            alt="login-image"
          />
        </div>

        <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Sign in
              </h3>
              <p className="text-sm mt-4 text-gray-800">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-6">
              <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
              Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3.5 px-6 rounded-lg text-white font-medium
                ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                }
                transform transition-all duration-200 ease-in-out
                hover:shadow-lg active:scale-98
                flex items-center justify-center space-x-2
              `}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign in</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

```

### 📄 src/pages/public/LoginAndRegister/RegisterForm.tsx

```
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterType } from "../../../types/auth.ts";
import axiosInstance from "../../../config/axiosConfig.ts";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "../../../components/common/LoadingSpinner.tsx";

const BASE_URL = "/api/auth";

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterType) => {
    try {
      setIsLoading(true);

      // First show loading toast
      const loadingToastId = toast.loading("Creating your account...", {
        position: "top-right",
      });

      await axiosInstance.post(`${BASE_URL}/register`, data);

      // Update loading toast to success
      toast.update(loadingToastId, {
        render: "Registration successful! Please log in.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      // Small delay before redirect
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/login");
    } catch (error: unknown) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 p-4 h-full max-w-7xl mx-auto">
        <div className="max-md:order-1 lg:col-span-2 w-full bg-[#000842] md:rounded-2xl lg:p-12 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="header/sign-in.png"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto filter drop-shadow-xl"
            alt="register-image"
          />
        </div>

        <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Register
              </h3>
              <p className="text-sm mt-4 text-gray-800">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Username
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                  className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter username"
                />
                {errors.username && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                    className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3.5 px-6 rounded-lg text-white font-medium
                ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                }
                transform transition-all duration-200 ease-in-out
                hover:shadow-lg active:scale-98
                flex items-center justify-center space-x-2
              `}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>Creating account...</span>
                </>
              ) : (
                <span>Create account</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

```

### 📄 src/pages/public/AboutUs/AboutUs.tsx

```
const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
            Finance Tracker giúp bạn kiểm soát tài chính tốt hơn
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chúng tôi giúp bạn quản lý tài chính một cách thông minh và hiệu quả
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Tại Finance Tracker, chúng tôi làm việc mỗi ngày để
              <span className="text-blue-600">
                {" "}
                giúp mọi người đưa ra quyết định tài chính thông minh
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Chúng tôi tin rằng quản lý tài chính nên đơn giản như mua sắm
                trực tuyến. Nó có thể được thực hiện mọi lúc, mọi nơi chỉ với vài
                cú nhấp chuột.
              </p>
              <p>
                Khởi đầu từ một công cụ theo dõi chi tiêu đơn giản cho một nhóm
                nhỏ, giờ đây chúng tôi đã phát triển thành ứng dụng tài chính cá
                nhân phục vụ hàng nghìn người dùng từ hầu hết các quốc gia trên
                thế giới.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/dd1.jpg"
              alt="team"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Gặp gỡ <span className="text-blue-600">đội ngũ</span> của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Card Template */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd3.jpg"
                alt="Tam Thông"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Tam Thông
              </h3>
              <p className="text-blue-600 text-center mb-4">Trưởng nhóm</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:david@example.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd4.jpg"
                alt="Gia Bảo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Gia Bảo
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:2251120334@ut.edu.vn"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd5.jpg"
                alt="Ngọc Đặng"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Ngọc Đặng
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:ndang2319@gmail.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd6.jpg"
                alt="Vũ Hoàng"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Vũ Hoàng
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:pavla@example.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

```

### 📄 src/pages/public/Home/Home.tsx

```
import SlideShow from "../../../components/public-pages/SlideShow/SlideShow.js";
import PropTypes from "prop-types";
import CommunitySlider from "../../../components/public-pages/SlideShow/SlickSlide-OurCommunity.js";

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

type OurFeatureProps = {
  imgSrc: string;
  ourTitle: string;
  ourDescription: string;
};

const FeatureCard = ({ imageSrc, title, description }: FeatureCardProps) => (
  <div className="bg-white shadow-lg rounded-xl p-8 text-left relative w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
    <div className="absolute -top-8 left-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-4 shadow-lg">
      <img src={imageSrc} alt="Feature icon" className="w-12 h-12 filter invert" />
    </div>
    <h3 className="text-xl font-bold mb-4 mt-12 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const OurFeature = ({ imgSrc, ourTitle, ourDescription }: OurFeatureProps) => (
  <div className="text-left p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
      <img src={imgSrc} alt={ourTitle} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{ourTitle}</h3>
    <p className="text-gray-600 leading-relaxed">{ourDescription}</p>
  </div>
);

const Home = () => {
  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="text-center h-screen">
        <SlideShow />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Tính năng <span className="text-blue-600">nổi bật</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            imageSrc="img/icons8-in-progress.gif"
            title="Kiểm soát hoàn hảo"
            description="Quản lý mọi chi tiêu tiền mặt, tài khoản ngân hàng, ví điện tử và ví tiền mã hóa của bạn."
          />
          <FeatureCard
            imageSrc="img/icons8-chart-100.png"
            title="Tổng quan nhanh chóng"
            description="Xem tổng quan về thu nhập và chi tiêu của bạn một cách nhanh chóng và tập trung tại một nơi."
          />
          <FeatureCard
            imageSrc="img/icons8-money-bag-100.png"
            title="Ngân sách thông minh"
            description="Tiết kiệm tiền cho xe mới, kỳ nghỉ mơ ước hoặc trường đại học hàng đầu."
          />
        </div>
      </div>

      {/* Our Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tính năng <span className="text-blue-600">người dùng yêu thích</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OurFeature
              imgSrc="img/icons8-wallet-100.png"
              ourTitle="Ví chung"
              ourDescription="Phổ biến trong các cặp đôi, gia đình và bạn cùng phòng quản lý tài chính chung."
            />
            <OurFeature
              imgSrc="img/icons8-bank-100.png"
              ourTitle="Liên kết tài khoản ngân hàng"
              ourDescription="Được ưa chuộng bởi những người thường xuyên thanh toán bằng thẻ."
            />
            <OurFeature
              imgSrc="img/icons8-user-100.png"
              ourTitle="Tùy chỉnh cá nhân hóa"
              ourDescription="Tùy chỉnh danh mục, thêm hình ảnh hoặc vị trí cho mọi khoản chi."
            />
            <OurFeature
              imgSrc="img/icons8-currencies-100.png"
              ourTitle="Đa tiền tệ"
              ourDescription="Lý tưởng cho người đi du lịch và người hay di chuyển quản lý tiền nhiều loại tiền tệ."
            />
            <OurFeature
              imgSrc="img/icons8-google-alerts-100.png"
              ourTitle="Cảnh báo và nhắc nhở"
              ourDescription="Thông báo khi đến hạn thanh toán hoặc vượt quá ngân sách."
            />
            <OurFeature
              imgSrc="img/icons8-sync-100.png"
              ourTitle="Đồng bộ và sao lưu"
              ourDescription="Hữu ích cho người dùng nhiều thiết bị và chia sẻ tài khoản với người khác."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-2">Đánh giá</h2>
            <h1 className="text-4xl font-bold text-gray-800">Khách hàng hài lòng</h1>
          </div>
          <CommunitySlider />
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
OurFeature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  ourTitle: PropTypes.string.isRequired,
  ourDescription: PropTypes.string.isRequired,
};

export default Home;

```

### 📄 public/template-exported/finance-report.xlsx

```
[Binary file or non-UTF8 encoding: finance-report.xlsx]
```

### 📄 public/template-exported/finance-report.pdf

```
[Binary file or non-UTF8 encoding: finance-report.pdf]
```

