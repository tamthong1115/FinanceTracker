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
