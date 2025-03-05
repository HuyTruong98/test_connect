import { FilterList, MoreVert, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import PaginationCommon from '../../components/pagination-common/pagination';

const StatusChip = styled('span')<{ status: string }>(({ theme, status }) => ({
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: '12px',
  fontWeight: 500,
  borderRadius: '12px',
  color: status === 'Active' ? theme.palette.success.main : theme.palette.error.main,
  backgroundColor: status === 'Active' ? theme.palette.success.light : theme.palette.error.light
}));

const RegistrationStatusChip = styled('span')<{ status: string }>(({ theme, status }) => ({
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: '12px',
  fontWeight: 500,
  borderRadius: '12px',
  color:
    status === 'Waiting'
      ? theme.palette.warning.main
      : status === 'Approved'
        ? theme.palette.success.main
        : theme.palette.error.main,
  backgroundColor:
    status === 'Waiting'
      ? theme.palette.warning.light
      : status === 'Approved'
        ? theme.palette.success.light
        : theme.palette.error.light
}));

export function DashboardView() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = [
    {
      owner: 'Floyd Miles',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 001',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ralph Edwards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 002',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Darlene Robertson',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 003',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Cody Fisher',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 004',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Devon Lane',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 005',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Floyd Miles',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 001',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ralph Edwards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 002',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Darlene Robertson',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 003',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Cody Fisher',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 004',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Devon Lane',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 005',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users'
    }
  ];

  const newRegistrations = [
    { name: 'Dianne Russell', clinic: 'Clinic 001', status: 'Waiting' },
    { name: 'Guy Hawkins', clinic: 'Clinic 002', status: 'Waiting' },
    { name: 'Annette Black', clinic: 'Clinic 003', status: 'Approved' },
    { name: 'Courtney Henry', clinic: 'Clinic 004', status: 'Refuse' },
    { name: 'Ralph Edwards', clinic: 'Clinic 005', status: 'Approved' }
  ];

  const columnWidths = [
    '20%', // Owner column
    '25%', // Email column
    '10%', // State column
    '15%', // Clinic column
    '15%', // Registration Date column
    '15%' // Plan column
  ];

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((row) => row.owner.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography variant='h4' fontWeight='500' fontSize='40px' lineHeight='44px' marginBottom='24px'>
        Dashboard
      </Typography>
      <Box display='flex' alignItems='center' mb={3}>
        <TextField
          variant='outlined'
          size='small'
          placeholder='Search'
          fullWidth
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            )
          }}
          sx={{
            marginRight: 2,
            width: '416px',
            borderRadius: '999px'
          }}
        />
        <Button variant='outlined' startIcon={<FilterList />} sx={{ textTransform: 'none' }}>
          Filter
        </Button>
      </Box>
      <Box display='flex' gap={3}>
        <Box flex={3}>
          <TableContainer component={Paper}>
            <Box maxHeight='781px' overflow='hidden' bgcolor='#EEEEE'>
              <Box padding='0 24px'>
                <Table stickyHeader className='header-table'>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: columnWidths[0] }}>Owner</TableCell>
                      <TableCell style={{ width: columnWidths[1] }}>Email</TableCell>
                      <TableCell style={{ width: columnWidths[2] }}>State</TableCell>
                      <TableCell style={{ width: columnWidths[3] }}>Clinic</TableCell>
                      <TableCell style={{ width: columnWidths[4] }}>Registration Date</TableCell>
                      <TableCell style={{ width: columnWidths[5] }}>Plan</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </Box>

              <Box maxHeight='672px' overflow='auto' padding='0 24px'>
                <Table className='body-table'>
                  <TableBody>
                    {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ width: columnWidths[0] }}>{row.owner}</TableCell>
                        <TableCell style={{ width: columnWidths[1] }}>{row.email}</TableCell>
                        <TableCell style={{ width: columnWidths[2] }}>{row.state}</TableCell>
                        <TableCell style={{ width: columnWidths[3] }}>{row.clinic}</TableCell>
                        <TableCell style={{ width: columnWidths[4] }}>{row.registrationDate}</TableCell>
                        <TableCell style={{ width: columnWidths[5] }}>{row.plan}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>

              <PaginationCommon
                totalResults={234}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </TableContainer>
        </Box>
        <Box flex={1} display='flex' flexDirection='column' gap={3}>
          <Card>
            <CardContent>
              <Box display='flex' justifyContent='space-between' mb={2}>
                <Typography variant='h6' fontWeight='bold'>
                  New Registration
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              {newRegistrations.map((item, index) => (
                <Box key={index} display='flex' justifyContent='space-between' my={1}>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.clinic}</Typography>
                  <RegistrationStatusChip status={item.status}>{item.status}</RegistrationStatusChip>
                </Box>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant='h6' fontWeight='bold' mb={2}>
                Plan Type
              </Typography>
              {/* <ResponsiveContainer width='100%' height={200}>
                <PieChart>
                  <Pie data={planData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} fill='#8884d8'>
                    {planData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <Box mt={2}>
                {planData.map((item, index) => (
                  <Box display='flex' justifyContent='space-between' key={index}>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.value}</Typography>
                  </Box>
                ))}
              </Box> */}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
