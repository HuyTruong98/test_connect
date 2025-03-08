import { Search, Tune } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
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
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { CustomDatePicker } from '../../components/date-picker';
import { CommonDrawer } from '../../components/drawer';
import { Label } from '../../components/label';
import PaginationCommon from '../../components/pagination-common/pagination';
import { IQueryDashBoard } from '../../types/dashboard';

const chipStyles = {
  bgcolor: 'rgba(46, 47, 49, 1)',
  color: 'white',
  height: '48px',
  width: 'auto',
  padding: '12px',
  '& .MuiChip-label': {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
    color: 'rgba(255, 255, 255, 1)'
  }
};

export function DashboardView() {
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

  const handleApply = () => {
    setState({ ...state, appliedQuery: { ...state.appliedQuery, ...state.query }, openDrawer: false });
  };

  const renderChip = (label: string, onDelete: () => void) => (
    <Chip
      label={label}
      sx={chipStyles}
      onDelete={onDelete}
      deleteIcon={<CloseIcon sx={{ color: 'white !important' }} />}
    />
  );

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

  const plans = ['1-4 Users', '1-10 Users', '1-20 Users', '1-50 Users'];

  const columnWidths = ['20%', '25%', '10%', '15%', '15%', '15%'];

  const handleSearch = (event: any) => {
    setState({ ...state, search: event.target.value });
  };

  const handleChangePage = (_event: any, newPage: number) => {
    setState({ ...state, page: newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setState({ ...state, rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  const filteredData = data.filter((row) => row.owner.toLowerCase().includes(state.search.toLowerCase()));

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

  const handleChangePlan = (plan: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      query: {
        ...state.query,
        planType: event.target.checked
          ? [...state.query.planType, plan]
          : state.query.planType.filter((item) => item !== plan)
      }
    });
  };

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

        <Label
          label='State'
          styles={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: 'rgba(46, 47, 49, 1)' }}
        >
          <TextField
            select
            value={state.query.state}
            onChange={(event) => {
              const { value } = event.target;
              setState({ ...state, query: { ...state.query, state: value } });
            }}
          >
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
          </TextField>
        </Label>

        <Box>
          <Label label='Plan Type'>
            <Stack spacing={1}>
              {plans.map((plan, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox checked={state.query.planType.includes(plan)} onChange={handleChangePlan(plan)} />}
                  label={plan}
                />
              ))}
            </Stack>
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
        Dashboard
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
                          <Chip label={item.status} color={item.status.toLowerCase() as any} />
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
