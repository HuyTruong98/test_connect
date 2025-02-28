import { Navigate, useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { CONFIG } from '../../utils/config-global';

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={CONFIG.auth.redirectPath} replace />
    },

    ...authRoutes,
    ...dashboardRoutes,

    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
