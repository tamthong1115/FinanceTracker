import axiosInstance from "./axiosConfig.ts";

export interface Users {
    id: number;
    username: string;
    email: string;
    role: string;
}

export interface Category {
    id: number;
    name: string;
    type: string;
}

export const getAllUsers = async (): Promise<Users[]> => {
    const response = await axiosInstance.get("/admin/users");
    return response.data;
}

export const getAllCategories = async () : Promise<Category[]> => {
    const response = await axiosInstance.get("/category");
    return response.data;
}