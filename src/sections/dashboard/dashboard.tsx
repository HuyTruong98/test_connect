import { Search, Tune } from '@mui/icons-material';
import {
  Box,
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
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
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

  const dataChart = [
    { name: '1-4 users', value: 50, color: '#E87EFC' },
    { name: '1-10 users', value: 80, color: '#6FDD93' },
    { name: '1-20 users', value: 60, color: '#FBBF54' },
    { name: '1-50 users', value: 90, color: '#4A9CFF' }
  ];

  const columnWidths = ['20%', '25%', '10%', '15%', '15%', '15%'];

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (_event: any, newPage: number) => {
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
      <Box display='flex' alignItems='center' mb={3} height='48px'>
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

            '& .MuiOutlinedInput-root': {
              borderRadius: '999px',
              height: '48px'
            }
          }}
        />
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            border: '1px solid rgba(217, 217, 217, 1)',
            backgroundColor: 'white',

            '&:hover': {
              backgroundColor: 'rgba(217, 217, 217, 0.2)'
            }
          }}
        >
          <Tune />
        </IconButton>
      </Box>
      <Box display='flex' gap={3}>
        <Box flex={3}>
          <TableContainer component={Paper}>
            <Box maxHeight='781px' overflow='hidden' bgcolor='#EEEEEE'>
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
        <Box flex={1} display='flex' flexDirection='column' gap={2}>
          <TableContainer component={Paper}>
            <Box maxHeight='406px' overflow='hidden' bgcolor='#EEEEEE' height='406px' padding='16px'>
              <Box width='100%' height='40px' display='flex' justifyContent='space-between' alignItems='center'>
                <Typography
                  variant='h6'
                  fontWeight='600'
                  color='rgba(46, 47, 49, 1)'
                  fontSize='18px'
                  lineHeight='28px'
                  letterSpacing='2%'
                >
                  New Registration
                </Typography>
                <IconButton
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '999px',
                    border: '1px solid rgba(217, 217, 217, 1)',
                    backgroundColor: '#EEEEE',

                    '&:hover': {
                      backgroundColor: 'rgba(217, 217, 217, 0.2)'
                    }
                  }}
                >
                  <img src='/assets/images/icon/arrows-expand.svg' alt='Expand Icon' />
                </IconButton>
              </Box>

              <Box maxHeight='345px' overflow='auto'>
                <Table className='body-table'>
                  <TableBody>
                    {newRegistrations.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.clinic}</TableCell>
                        <TableCell>
                          <RegistrationStatusChip status={item.status}>{item.status}</RegistrationStatusChip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </TableContainer>

          <Box maxHeight='359px' bgcolor='#EEEEEE' height='100%' borderRadius='24px' padding='16px'>
            <Typography variant='subtitle1' fontWeight='600' width='100%' height='30px'>
              Plan Type
            </Typography>
            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={dataChart}
                  dataKey='value'
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={1}
                  startAngle={90}
                  endAngle={-270}
                  cornerRadius={4}
                >
                  {dataChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <text
                  x='50%'
                  y='50%'
                  textAnchor='middle'
                  dominantBaseline='middle'
                  fontSize='48'
                  fontWeight='700'
                  fill='rgba(46, 47, 49, 1)'
                >
                  234
                </text>
                <text
                  x='50%'
                  y='63%'
                  textAnchor='middle'
                  dominantBaseline='middle'
                  fontSize='14'
                  fill='rgba(64, 64, 64, 1)'
                  fontWeight='400'
                >
                  Clinics
                </text>
              </PieChart>
            </ResponsiveContainer>
            <Box display='flex' justifyContent='center' gap='20px' mt='18px'>
              {dataChart.map((entry, index) => (
                <Box key={index} display='flex' alignItems='center' gap={1}>
                  <Box width={10} height={10} bgcolor={entry.color} borderRadius='50%' />
                  <Typography fontSize='14px' fontWeight='600' lineHeight='22px'>
                    {entry.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
