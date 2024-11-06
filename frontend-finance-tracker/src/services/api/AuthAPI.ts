import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const client = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email: string, password: string) => {
  const { data } = await client.post("/auth/login", { email, password });
  return data;
};
