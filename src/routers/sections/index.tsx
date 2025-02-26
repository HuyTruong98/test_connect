import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import NotFoundPage from '../../pages/error/404';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import PrivateRoute from '../../auth/privateRouter';

export function Router() {
  return useRoutes([
    ...authRoutes,
    {
      path: '/',
      element: <Navigate to='/dashboard' replace />
    },
    {
      path: 'dashboard/*',
      element: (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      ),
      children: dashboardRoutes
    },
    { path: '/404', element: <NotFoundPage /> },
    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
