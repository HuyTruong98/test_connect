import { Helmet } from 'react-helmet-async';

import { SignInView } from '../../../sections/auth/jwt';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <SignInView />
    </>
  );
}
