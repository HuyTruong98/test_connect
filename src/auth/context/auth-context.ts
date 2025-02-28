import { createContext } from 'react';

export type UserType = Record<string, any> | null;

export type AuthContextValue = {
  user: UserType;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  checkUserSession?: () => Promise<void>;
};
// ----------------------------------------------------------------------

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthConsumer = AuthContext.Consumer;
