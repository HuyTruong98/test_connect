import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authProvider';
import { paths } from '../../routers/paths';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <>{children}</> : <Navigate to={paths.auth.login} state={{ from: location }} replace />;
};
