import { Helmet } from 'react-helmet-async';
import { AccountIdView } from '../../sections/account';

// ----------------------------------------------------------------------

const metadata = { title: 'Account' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountIdView />
    </>
  );
}
