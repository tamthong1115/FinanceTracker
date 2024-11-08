import axiosInstance  from "./axiosConfig.ts";

export const validateToken = async (token: string) : Promise<boolean> => {
    try {
        const response = await axiosInstance.get("/auth/validate-token", {
            params: { token }
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const signOut = async () => {
    try {

        await axiosInstance.post("/auth/logout");
    } catch (error) {
        return Promise.reject(error);
    }
}