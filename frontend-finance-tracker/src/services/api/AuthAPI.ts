import axiosInstance  from "./axiosConfig.ts";

export const validateToken = async () => {
    try {
        const response = await axiosInstance.get("/auth/validate-token");
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}