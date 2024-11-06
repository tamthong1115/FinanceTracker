import axiosInstance from "./axiosConfig";

export interface Budget {
  id: number;
  categoryName: string;
  amount: number;
  spent: number;
  startDate: string;
  endDate: string;
  isLoop: boolean;
  createdAt: string;
  userId: number;
}

export interface CreateBudgetDTO {
  categoryId: number;
  amount: number;
  startDate: string;
  endDate: string;
  isLoop: boolean;
}

export const getAllBudgets = async (): Promise<Budget[]> => {
  const response = await axiosInstance.get("/budget");
  return response.data;
};

export const getBudgetById = async (id: number): Promise<Budget> => {
  const response = await axiosInstance.get(`/budget/${id}`);
  return response.data;
};

export const createBudget = async (
  budget: CreateBudgetDTO
): Promise<Budget> => {
  const response = await axiosInstance.post("/budget", budget);
  return response.data;
};

export const deleteBudget = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/budget/${id}`);
};
