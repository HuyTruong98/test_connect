import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthGuard } from '../../auth/guard';
import { ROOTS } from '../paths';
import { DashboardLayout } from '../../layout/dashboard';

const DashboardMain = lazy(() => import('../../pages/dashboard/dashboard'));
const Account = lazy(() => import('../../pages/account/account'));
const Setting = lazy(() => import('../../pages/plan-setting/setting'));

export const dashboardRoutes = [
  {
    path: '',
    element: <Navigate to={ROOTS.DASHBOARD} replace />
  },
  {
    path: ROOTS.DASHBOARD,
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: '', // "/dashboard"
        element: <DashboardMain />
      }
    ]
  },
  {
    path: ROOTS.ACCOUNT,
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Account />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    )
  },
  {
    path: ROOTS.PLAN_SETTING,
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Setting />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    )
  }
];
