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
