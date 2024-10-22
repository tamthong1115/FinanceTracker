import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../services/api/axiosConfig';

interface AuthContextType {
    isAuthenticated: boolean;
    user: any | null;
    login: (token: string) => void;
    logout: () => void;
    setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                // Just set authenticated if token exists
                setIsAuthenticated(true);
                // Set default axios header
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            setIsLoading(false);
        };

        initializeAuth();
    }, []);

    const login = async (token: string) => {
        try {
            localStorage.setItem('token', token);
            // Set token in axios defaults
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Set authenticated without profile check
            setIsAuthenticated(true);

            // Redirect to intended destination or dashboard
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });

            /* Comment out profile fetch for now
            // Get user profile
            const response = await axiosInstance.get('/auth/profile');
            setUser(response.data);
            */
        } catch (error) {
            console.error('Login error:', error);
            handleLogout();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login', { replace: true });
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
                isAuthenticated,
                user,
                login,
                logout: handleLogout,
                setUser
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
