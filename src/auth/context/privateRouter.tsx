import React, { JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authProvider';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { isAuthenticated } = authContext;

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default PrivateRoute;
