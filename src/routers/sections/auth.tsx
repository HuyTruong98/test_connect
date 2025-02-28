import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GuestGuard } from '../../auth/guard';
import { ROOTS } from '../paths';

const Auth = {
  LoginPage: lazy(() => import('../../pages/auth/login'))
};

const authLogin = {
  path: 'login',
  element: <Auth.LoginPage />
};

export const authRoutes = [
  {
    path: ROOTS.AUTH,
    element: (
      <GuestGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </GuestGuard>
    ),
    children: [authLogin]
  }
];
