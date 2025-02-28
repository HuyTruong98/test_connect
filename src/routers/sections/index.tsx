import { useRoutes } from 'react-router-dom';
import NotFoundPage from '../../pages/error/404';
import { authRoutes } from './auth';
import { dashboardRoutes as rawDashboardRoutes } from './dashboard';

export function Router() {
  return useRoutes([...authRoutes, ...rawDashboardRoutes, { path: '*', element: <NotFoundPage /> }]);
}
