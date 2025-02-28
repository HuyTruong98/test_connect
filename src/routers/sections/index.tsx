import { Navigate, useRoutes } from 'react-router-dom';
import NotFoundPage from '../../pages/error/404';
import { authRoutes } from './auth';
import { dashboardRoutes as rawDashboardRoutes } from './dashboard';
import { PrivateRoute } from '../../auth/privateRouter';

const dashboardRoutes = rawDashboardRoutes.map((route) => ({
  ...route,
  element: <PrivateRoute>{route.element}</PrivateRoute>
}));

export function Router() {
  return useRoutes([
    ...authRoutes,
    ...dashboardRoutes,
    { path: '/404', element: <NotFoundPage /> },
    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
