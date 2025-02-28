import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authProvider';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <>{children}</> : <Navigate to='/auth/login' state={{ from: location }} replace />;
};
