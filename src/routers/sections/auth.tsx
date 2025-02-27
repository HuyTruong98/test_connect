import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Jwt = {
  SignInPage: lazy(() => import('../../pages/auth/jwt/sign-in'))
};

const authJwt = {
  path: 'jwt',
  children: [
    {
      path: 'sign-in',
      element: <Jwt.SignInPage />
    }
  ]
};

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [authJwt]
  }
];
