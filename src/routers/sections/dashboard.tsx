import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = {
  MainPage: lazy(() => import('../../pages/dashboard/dashboard'))
};

const dashboard = {
  path: '',
  element: <Dashboard.MainPage />
};

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [dashboard]
  }
];
