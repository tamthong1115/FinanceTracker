export interface RegisterType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}
