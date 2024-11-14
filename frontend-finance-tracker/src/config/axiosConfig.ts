import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                    toast.error('Authentication failed. Please login again.');
                    break;
                case 403:
                    toast.error('You do not have permission to perform this action');
                    break;
                case 404:
                    // Don't show error for profile endpoint
                    if (!error.config.url.includes('/auth/profile')) {
                        toast.error('Resource not found');
                    }
                    break;
                case 500:
                    toast.error('Internal server error. Please try again later.');
                    break;
                default:
                    toast.error(error.response.data?.message || 'Something went wrong');
            }
        } else if (error.request) {
            toast.error('No response from server. Please check your connection.');
        } else {
            toast.error('Request failed. Please try again.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
