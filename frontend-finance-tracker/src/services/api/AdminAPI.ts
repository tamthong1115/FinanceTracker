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

export const lockUser = async (id: number): Promise<Users[]> => {
    const response = await axiosInstance.patch(`/admin/users/lock/${id}`);
    return response.data;
}

export const setRoleUser = async (id: number, role: string): Promise<Users[]> => {
    const response = await axiosInstance.patch(`/admin/users/setrole/${id}`, {role});
    return response.data;
}

export const getAllCategories = async () : Promise<Category[]> => {
    const response = await axiosInstance.get("/category");
    return response.data;
}

export const deleteCategory = async (id: number): Promise<Category[]> => {
    const response = await axiosInstance.delete(`/category/${id}`);
    return response.data;
}

export const addCategory = async (category: { name: string; type: string }): Promise<Category[]> => {
    const response = await axiosInstance.post("/category/create", category);
    return response.data;
}