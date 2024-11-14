import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosConfig";
import { Budget, BudgetFormData } from "../types/budget";

export const useBudgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBudgets = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Budget[]>("/budgets");
      setBudgets(response.data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch budgets";
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
      const response = await axiosInstance.post<Budget>("/budgets", data);
      setBudgets((prev) => [...prev, response.data]);
      toast.success("Budget created successfully");
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to create budget";
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateBudget = async (id: number, data: BudgetFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Budget>(`/budgets/${id}`, data);
      setBudgets((prev) =>
        prev.map((budget) => (budget.id === id ? response.data : budget))
      );
      toast.success("Budget updated successfully");
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update budget";
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteBudget = async (id: number) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/budgets/${id}`);
      setBudgets((prev) => prev.filter((budget) => budget.id !== id));
      toast.success("Budget deleted successfully");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to delete budget";
      toast.error(errorMessage);
      throw err;
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
