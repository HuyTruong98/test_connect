import { Helmet } from 'react-helmet-async';

import { SignUpView } from '../../../sections/auth/jwt';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <SignUpView />
    </>
  );
}
