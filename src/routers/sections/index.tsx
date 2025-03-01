import { Navigate, useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { mainRoutes } from './main.';

export function Router() {
  return useRoutes([
    ...authRoutes,
    ...dashboardRoutes,
    ...mainRoutes,
    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
