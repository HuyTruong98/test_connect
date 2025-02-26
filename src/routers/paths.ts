// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard'
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signIn: `${ROOTS.AUTH}/jwt/sign-in`,
    signUp: `${ROOTS.AUTH}/jwt/sign-up`
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD
  }
};
