import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { STORAGE_KEY } from './constants';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedJwt = localStorage.getItem(STORAGE_KEY);
    if (storedJwt) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  function login(token: string) {
    setIsLoggedIn(true);
    localStorage.setItem(STORAGE_KEY, token);
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  const authValue: AuthContextType = {
    isLoggedIn,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
