import { Card, Container, Table, TableContainer } from '@mui/material';
import Scrollbar from '../../components/scrollbar';

export function DashboardView() {
  return (
    <Container maxWidth='lg'>
      <Card>
        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table size='medium' sx={{ minWidth: 960 }}>
              Dashboard
            </Table>
          </Scrollbar>
        </TableContainer>
      </Card>
    </Container>
  );
}
