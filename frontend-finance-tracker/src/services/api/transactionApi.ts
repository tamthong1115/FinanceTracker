import axios from "axios";
import { Transaction, TransactionFormData } from "../../types/transaction";

const BASE_URL = "http://localhost:8080/api/transactions";

export const transactionApi = {
  getAll: async () => {
    const response = await axios.get<Transaction[]>(BASE_URL);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await axios.get<Transaction>(`${BASE_URL}/${id}`);
    return response.data;
  },

  create: async (transaction: TransactionFormData) => {
    const response = await axios.post<Transaction>(BASE_URL, transaction);
    return response.data;
  },

  update: async (id: number, transaction: TransactionFormData) => {
    const response = await axios.put<Transaction>(
      `${BASE_URL}/${id}`,
      transaction
    );
    return response.data;
  },

  delete: async (id: number) => {
    await axios.delete(`${BASE_URL}/${id}`);
  },

  getByDateRange: async (startDate: string, endDate: string) => {
    const response = await axios.get<Transaction[]>(`${BASE_URL}/range`, {
      params: { startDate, endDate },
    });
    return response.data;
  },

  getByCategory: async (category: string) => {
    const response = await axios.get<Transaction[]>(
      `${BASE_URL}/category/${category}`
    );
    return response.data;
  },
};
