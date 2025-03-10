import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: 'Account' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      AccountId
    </>
  );
}
