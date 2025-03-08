// ----------------------------------------------------------------------

export const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  ACCOUNT: '/account',
  PLAN_SETTING: '/plan-setting'
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD
  },

  // ACCOUNT
  account: {
    root: ROOTS.ACCOUNT
  },
  // PLAN_SETTING
  planSetting: {
    root: ROOTS.PLAN_SETTING
  }
};
