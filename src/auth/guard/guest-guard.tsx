import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider';
import { paths } from '../../routers/paths';

interface GuestGuardProps {
  children: React.ReactNode;
}

export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={paths.dashboard.root} replace />;
  }

  return <>{children}</>;
};
