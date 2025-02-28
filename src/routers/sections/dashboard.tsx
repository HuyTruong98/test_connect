import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const DashboardMain = lazy(() => import('../../pages/dashboard/dashboard'));

export const dashboardRoutes = [
  {
    path: '/',
    element: <Navigate to='/dashboard' replace />
  },
  {
    path: 'dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <DashboardMain />
      }
    ]
  }
];
