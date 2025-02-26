import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Jwt = {
  SignInPage: lazy(() => import('../../pages/auth/jwt/sign-in')),
  SignUpPage: lazy(() => import('../../pages/auth/jwt/sign-up'))
};

const authJwt = {
  path: 'jwt',
  children: [
    {
      path: 'sign-in',
      element: <Jwt.SignInPage />
    },
    {
      path: 'sign-up',
      element: <Jwt.SignUpPage />
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
