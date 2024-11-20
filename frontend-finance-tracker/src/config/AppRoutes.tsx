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
