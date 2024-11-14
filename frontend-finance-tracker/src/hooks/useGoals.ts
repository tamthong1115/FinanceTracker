import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosConfig";

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

export const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGoals = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Goal[]>("/goals");
      setGoals(response.data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch goals";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const createGoal = async (data: Omit<Goal, "id" | "currentAmount">) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Goal>("/goals", data);
      setGoals((prev) => [...prev, response.data]);
      toast.success("Goal created successfully");
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to create goal";
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateGoal = async (id: number, data: Partial<Goal>) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Goal>(`/goals/${id}`, data);
      setGoals((prev) =>
        prev.map((goal) => (goal.id === id ? response.data : goal))
      );
      toast.success("Goal updated successfully");
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to update goal";
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteGoal = async (id: number) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/goals/${id}`);
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
      toast.success("Goal deleted successfully");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to delete goal";
      toast.error(errorMessage);
      throw err;
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
