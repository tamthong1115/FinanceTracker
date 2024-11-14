import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosConfig";
import { Transaction, TransactionFormData } from "../types/transaction";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Transaction[]>("/transactions");
      setTransactions(response.data);
    } catch (err) {
      setError("Failed to fetch transactions");
      toast.error("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  }, []);

  const createTransaction = async (data: TransactionFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Transaction>(
        "/transactions",
        data
      );
      setTransactions((prev) => [...prev, response.data]);
      toast.success("Transaction created successfully");
      return response.data;
    } catch (err) {
      toast.error("Failed to create transaction");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTransaction = async (id: number, data: TransactionFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put<Transaction>(
        `/transactions/${id}`,
        data
      );
      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction.id === id ? response.data : transaction
        )
      );
      toast.success("Transaction updated successfully");
      return response.data;
    } catch (err) {
      toast.error("Failed to update transaction");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (id: number) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/transactions/${id}`);
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
      toast.success("Transaction deleted successfully");
    } catch (err) {
      toast.error("Failed to delete transaction");
      throw err;
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
