import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthGuard } from '../../auth/guard';

const DashboardMain = lazy(() => import('../../pages/dashboard/dashboard'));

export const dashboardRoutes = [
  {
    path: '',
    element: <Navigate to='/dashboard' replace />
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <DashboardMain />
      }
    ]
  }
];
