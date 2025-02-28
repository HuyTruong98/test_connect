import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthGuard } from '../../auth/guard';
import { ROOTS } from '../paths';

const DashboardMain = lazy(() => import('../../pages/dashboard/dashboard'));

export const dashboardRoutes = [
  {
    path: '',
    element: <Navigate to={ROOTS.DASHBOARD} replace />
  },
  {
    path: ROOTS.DASHBOARD,
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
