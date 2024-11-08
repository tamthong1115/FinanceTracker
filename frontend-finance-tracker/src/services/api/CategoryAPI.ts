import axiosInstance from "./axiosConfig";

export interface Category {
    id: number;
    name: string;
    type: string;
    parent?: Category;
    createdAt: Date;
    user: User;
}

interface User {
    id: number;
    email: string;
    username: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
    const response = await axiosInstance.get("/category");
    return response.data;
};