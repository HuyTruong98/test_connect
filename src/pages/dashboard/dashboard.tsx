import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: `Dashboard` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <div>Dashboard</div>
    </>
  );
}
