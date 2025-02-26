import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const metadata = { title: `404 page not found! | Error` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <div>Not Found</div>
    </>
  );
}
