import { Helmet } from 'react-helmet-async';
import { DashboardView } from '../../sections/dashboard';

// ----------------------------------------------------------------------

const metadata = { title: `Dashboard` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardView />
    </>
  );
}
