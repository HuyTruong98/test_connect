import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: 'Setting' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      Account
    </>
  );
}
