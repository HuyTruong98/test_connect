import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider';

interface GuestGuardProps {
  children: React.ReactNode;
}

export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to='/dashboard' replace />;
  }

  return <>{children}</>;
};
