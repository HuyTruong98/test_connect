import { Navigate } from 'react-router-dom';
import { useAuth } from './authProvider';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <>{children}</> : <Navigate to='/auth/jwt/sign-in' replace />;
};
