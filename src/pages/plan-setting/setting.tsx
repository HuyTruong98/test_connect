import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: 'Plan Setting' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      Plan Setting
    </>
  );
}
