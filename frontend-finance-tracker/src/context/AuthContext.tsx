import React, {createContext, useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosInstance from '../services/api/axiosConfig';
import {validateToken} from "../services/api/AuthAPI.ts";
import {useQuery} from "react-query";

interface User {
    id: number;
    username: string;
    email: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (token: string, userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const { isError } = useQuery('validateToken', validateToken, {
        retry: false,
        refetchOnWindowFocus: false,
        enabled: false,
        onError: () => {
            handleLogout();
            navigate('/login');
        },
    });

    useEffect(() => {
        // Check for existing token and user data in localStorage
        // const token = localStorage.getItem('token');
        // const savedUser = localStorage.getItem('user');
        //
        // console.log(`token: ${token}\nsavedUser: ${savedUser}`);
        // if (token && savedUser) {
        //     setIsAuthenticated(true);
        //     setUser(JSON.parse(savedUser));
        //     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // }
        // setIsLoading(false);
    }, []);

    const login = (token: string, userData: User) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        // setIsAuthenticated(true);
        setUser(userData);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete axiosInstance.defaults.headers.common['Authorization'];
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await handleLogout();
            navigate('/login');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated : !isError,
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
