import { Helmet } from 'react-helmet-async';
import { LoginView } from '../../sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <LoginView />
    </>
  );
}
