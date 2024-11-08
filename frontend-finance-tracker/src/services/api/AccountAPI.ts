import axiosInstance from "./axiosConfig.ts";
import {Account} from '../../types/account.ts';


export const getAccounts = async () : Promise<Account[]> => {
    try {
        const response = await axiosInstance.get("/account");
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}