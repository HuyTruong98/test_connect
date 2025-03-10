import { Search, Tune } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
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
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { CustomDatePicker } from '../../components/date-picker';
import { CommonDrawer } from '../../components/drawer';
import { Label } from '../../components/label';
import PaginationCommon from '../../components/pagination-common/pagination';
import { IQueryDashBoard } from '../../types/dashboard';

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
      plan: '1-50 Users',
      status: 'Owner'
    },
    {
      owner: 'Ralph Edwards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 002',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: ''
    },
    {
      owner: 'Darlene Robertson',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 003',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: ''
    },
    {
      owner: 'Cody Fisher',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 004',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: ''
    },
    {
      owner: 'Devon Lane',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 005',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: 'Owner'
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
      plan: '1-50 Users',
      status: 'Owner'
    },
    {
      owner: 'Cody Fisher',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 004',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: 'Owner'
    },
    {
      owner: 'Devon Lane',
      email: 'owner001@gmail.com',
      state: 'Active',
      clinic: 'Clinic 005',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: ''
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: 'Owner'
    },
    {
      owner: 'Ronald Richards',
      email: 'owner001@gmail.com',
      state: 'Suspended',
      clinic: 'Clinic 006',
      registrationDate: '15 Dec 2024',
      plan: '1-50 Users',
      status: 'Owner'
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

  const handleApply = () => {
    setState({ ...state, appliedQuery: { ...state.appliedQuery, ...state.query }, openDrawer: false });
  };

  const columnWidths = ['230px', '200px', '200px', '160px', '160px', '160px'];

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

  const handleFromDateChange = (date: Dayjs | null) => {
    if (!date) return;

    if (!state.query.toDate || date.isAfter(state.query.toDate)) {
      setState({ ...state, query: { ...state.query, toDate: date, fromDate: date } });
    } else {
      setState({ ...state, query: { ...state.query, fromDate: date } });
    }
  };

  const handleToDateChange = (date: Dayjs | null) => {
    if (!date) return;

    if (!state.query.fromDate || date.isBefore(state.query.fromDate)) {
      setState({ ...state, query: { ...state.query, fromDate: date, toDate: date } });
    } else {
      setState({ ...state, query: { ...state.query, toDate: date } });
    }
  };

  const renderContent = () => {
    return (
      <Stack spacing={2}>
        <Box width='100%' height='24px'>
          <Typography
            width='100%'
            height='100%'
            fontWeight='600'
            fontSize='16px'
            lineHeight='24px'
            color='rgba(46, 47, 49, 1)'
            mb='12px'
          >
            Registration Date
          </Typography>
        </Box>
        <Box display='flex' gap={2} alignItems='center'>
          <Label label='From'>
            <CustomDatePicker
              value={state.query.fromDate}
              onChange={handleFromDateChange}
              maxDate={state.query.toDate || undefined}
            />
          </Label>
          <Label label='To'>
            <CustomDatePicker
              value={state.query.toDate}
              onChange={handleToDateChange}
              minDate={state.query.fromDate || undefined}
            />
          </Label>
        </Box>
      </Stack>
    );
  };

  const renderActions = () => {
    return (
      <>
        <Button variant='outlined' sx={{ width: '198px', height: '40px', borderRadius: '999px' }}>
          Clear
        </Button>
        <Button
          variant='outlined'
          color='inherit'
          className='loading-button'
          sx={{ width: '198px', height: '40px', borderRadius: '999px' }}
          onClick={handleApply}
        >
          Apply
        </Button>
      </>
    );
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
                          <TableCell style={{ width: columnWidths[0], whiteSpace: 'nowrap' }}>
                            <Box display='flex' alignItems='center' gap='8px' overflow='hidden'>
                              <Typography
                                noWrap
                                sx={{ textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '150px' }}
                              >
                                {row.owner}
                              </Typography>
                              {row.status && <Chip label={row.status} color={row.status.toLowerCase() as any} />}
                            </Box>
                          </TableCell>

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

          <Box maxHeight='295px' bgcolor='#FFF' height='100%' gap='8px' display='flex'>
            <Box
              flex={1}
              bgcolor='rgba(220, 255, 220, 1)'
              borderRadius='12px'
              padding='16px'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
            >
              <Box>
                <Typography variant='subtitle1' fontSize='14px' lineHeight='22px' fontWeight='500' marginBottom='16px'>
                  Total New Accounts
                </Typography>

                <TextField select defaultValue='This Week' variant='outlined' className='MuiTextField-selectCustom'>
                  <MenuItem value='This Week'>This Week</MenuItem>
                  <MenuItem value='This Month'>This Month</MenuItem>
                  <MenuItem value='This Year'>This Year</MenuItem>
                </TextField>
              </Box>
              <Box>
                <Box display='flex' alignItems='end' gap='12px' height='47px' mb='16px'>
                  <Typography
                    fontWeight='500'
                    color='rgba(46, 47, 49, 1)'
                    lineHeight='100%'
                    height='100%'
                    fontSize='55px'
                  >
                    345
                  </Typography>
                  <Chip label='+12%' size='small' color='new' />
                </Box>
                <Typography fontSize='12px' fontWeight='400' lineHeight='16px' color='rgba(64, 64, 64, 1)' mb='14px'>
                  Compared to last week
                </Typography>
              </Box>
            </Box>

            <Box
              flex={1}
              bgcolor='rgba(255, 232, 232, 1)'
              borderRadius='12px'
              padding='16px'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
            >
              <Box>
                <Typography variant='subtitle1' fontSize='14px' lineHeight='22px' fontWeight='500' marginBottom='16px'>
                  Total Closed Accounts
                </Typography>

                <TextField select defaultValue='This Week' variant='outlined' className='MuiTextField-selectCustom'>
                  <MenuItem value='This Week'>This Week</MenuItem>
                  <MenuItem value='This Month'>This Month</MenuItem>
                  <MenuItem value='This Year'>This Year</MenuItem>
                </TextField>
              </Box>
              <Box>
                <Box display='flex' alignItems='end' gap='12px' height='47px' mb='16px'>
                  <Typography
                    fontWeight='500'
                    color='rgba(46, 47, 49, 1)'
                    lineHeight='100%'
                    height='100%'
                    fontSize='55px'
                  >
                    123
                  </Typography>
                  <Chip label='-12%' size='small' color='closed' />
                </Box>
                <Typography fontSize='12px' fontWeight='400' lineHeight='16px' color='rgba(64, 64, 64, 1)' mb='14px'>
                  Compared to last month
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <CommonDrawer
        open={state.openDrawer}
        onClose={() => setState({ ...state, openDrawer: false })}
        styles={{
          width: '475px',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          padding: '15px 40px 40px 24px'
        }}
        title='Filter'
        children={renderContent()}
        actions={renderActions()}
      />
    </Box>
  );
}
