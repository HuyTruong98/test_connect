import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { STORAGE_KEY } from './constants';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem(STORAGE_KEY, token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
