import axiosInstance from "./axiosConfig.ts";

export interface Transaction {
    id: number;
    categoryName: string;
    amount: number;
    type: string;
    description: string;
    date: string;
    notes: string;
    paymentMethod: string;
    status: string;
}

export const getAllTransactions = async (): Promise<Transaction[]> => {
    const response = await axiosInstance.get("/transactions");
    return response.data;
}