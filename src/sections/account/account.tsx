import { Search, Tune } from '@mui/icons-material';
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IQueryDashBoard } from '../../types/dashboard';
import dayjs from 'dayjs';
import PaginationCommon from '../../components/pagination-common/pagination';

export function AccountView() {
  const [state, setState] = useState<{
    search: string;
    page: number;
    rowsPerPage: number;
    openDrawer: boolean;
    query: IQueryDashBoard;
    appliedQuery: IQueryDashBoard;
  }>({
    search: '',
    page: 0,
    rowsPerPage: 10,
    openDrawer: false,
    query: {
      fromDate: null,
      toDate: null,
      planType: [],
      state: 'all'
    },
    appliedQuery: {
      fromDate: null,
      toDate: null,
      planType: [],
      state: 'all'
    }
  });

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
    { email: 'dolores.chambers@example.com', time: '1 hrs ago' },
    { email: 'nevaeh.simmons@example.com', time: '2 hrs ago' },
    { email: 'nathan.roberts@example.com', time: '3 hrs ago' },
    { email: 'jackson.graham@example.com', time: '4 hrs ago' },
    { email: 'willie.jennings@example.com', time: '5 hrs ago' },
    { email: 'debra.holt@example.com', time: '6 hrs ago' }
  ];

  const columnWidths = ['160px', '200px', '200px', '160px', '160px', '160px'];

  const filteredData = data.filter((row) => row.owner.toLowerCase().includes(state.search.toLowerCase()));

  const handleChangePage = (_event: any, newPage: number) => {
    setState({ ...state, page: newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setState({ ...state, rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  const renderChip = (label: string, onDelete: () => void) => (
    <Chip
      label={label}
      onDelete={onDelete}
      color='search'
      deleteIcon={<CloseIcon sx={{ color: 'white !important' }} />}
    />
  );

  const handleRemoveFilter = (key: keyof IQueryDashBoard, value?: string) => {
    setState((prevState) => ({
      ...prevState,
      appliedQuery: {
        ...prevState.appliedQuery,
        ...(key === 'fromDate'
          ? { fromDate: null, toDate: null }
          : key === 'planType' && value
            ? { planType: prevState.appliedQuery.planType.filter((type) => type !== value) }
            : key === 'state'
              ? { state: 'all' }
              : { [key]: null })
      }
    }));
  };

  const handleSearch = (event: any) => {
    setState({ ...state, search: event.target.value });
  };

  return (
    <Box>
      <Typography variant='h4' fontWeight='500' fontSize='40px' lineHeight='44px' marginBottom='24px'>
        Account Management
      </Typography>
      <Box display='flex' alignItems='center' mb={3} height='48px'>
        <TextField
          variant='outlined'
          size='small'
          placeholder='Search'
          fullWidth
          value={state.search}
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
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D9D9D9'
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
          onClick={() => setState({ ...state, openDrawer: true })}
        >
          <Tune />
        </IconButton>

        <Stack direction='row' gap='12px' ml='12px'>
          {state.appliedQuery.fromDate &&
            renderChip(
              `${dayjs(state.appliedQuery.fromDate).format('YYYY/MM/DD')} - ${dayjs(state.appliedQuery.toDate).format('YYYY/MM/DD')}`,
              () => handleRemoveFilter('fromDate')
            )}

          {state.appliedQuery.planType.length > 0 &&
            state.appliedQuery.planType.map((type) => renderChip(type, () => handleRemoveFilter('planType', type)))}

          {state.appliedQuery.state !== 'all' &&
            renderChip(state.appliedQuery.state, () => handleRemoveFilter('state'))}
        </Stack>
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
                    {filteredData
                      .slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage)
                      .map((row, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ width: columnWidths[0] }}>{row.owner}</TableCell>
                          <TableCell style={{ width: columnWidths[1] }}>{row.email}</TableCell>
                          <TableCell style={{ width: columnWidths[2] }}>
                            <Chip label={row.state} color={row.state.toLowerCase() as any} />
                          </TableCell>
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
                page={state.page}
                rowsPerPage={state.rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </TableContainer>
        </Box>
        <Box flex={1} display='flex' flexDirection='column' gap={2}>
          <TableContainer component={Paper}>
            <Box maxHeight='476px' overflow='hidden' bgcolor='#EEEEEE' height='470px' padding='16px'>
              <Box width='100%' height='40px' display='flex' justifyContent='space-between' alignItems='center'>
                <Typography
                  variant='h6'
                  fontWeight='600'
                  color='rgba(46, 47, 49, 1)'
                  fontSize='18px'
                  lineHeight='28px'
                  letterSpacing='2%'
                >
                  New Account
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

              <Box maxHeight='444px' overflow='auto'>
                <Table className='body-table'>
                  <TableBody>
                    {newRegistrations.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </TableContainer>

          <Box maxHeight='295px' bgcolor='#FFF' height='100%' gap='8px'>
            <Typography variant='subtitle1' fontWeight='600' width='100%' height='30px'>
              New Account
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
