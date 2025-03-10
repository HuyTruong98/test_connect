import { Helmet } from 'react-helmet-async';
import { AccountView } from '../../sections/account';

// ----------------------------------------------------------------------

const metadata = { title: 'Account' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountView />
    </>
  );
}
