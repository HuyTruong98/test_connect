import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CONFIG } from '../../utils/config-global';
import { AuthGuard } from '../../auth/guard';

const Dashboard = {
  MainPage: lazy(() => import('../../pages/dashboard/dashboard'))
};

const layoutContent = (
  // div thay the bang dashboardLayout
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </div>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      {
        element: <Dashboard.MainPage />,
        index: true
      }
    ]
  }
];
