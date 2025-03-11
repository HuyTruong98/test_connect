import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useState } from 'react';
import PaginationCommon from '../../components/pagination-common/pagination';
import { useRouter } from '../../routers/hooks';
import { ROOTS } from '../../routers/paths';
import { IQueryDashBoard } from '../../types/dashboard';

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

const columnWidths = ['230px', '200px', '200px', '160px', '160px', '160px'];

export function AccountIdView() {
  const router = useRouter();

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

  const filteredData = data.filter((row) => row.owner.toLowerCase().includes(state.search.toLowerCase()));

  const handleChangePage = (_event: any, newPage: number) => {
    setState({ ...state, page: newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setState({ ...state, rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        gap='12px'
        width='100%'
        height='48px'
        justifyContent='space-between'
        marginBottom='24px'
      >
        <Box display='flex' alignItems='center' gap='12px' width='100%' height='100%'>
          <IconButton onClick={() => router.push(ROOTS.ACCOUNT)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant='h4' fontWeight='500' fontSize='40px' lineHeight='44px'>
            Clinic 001
          </Typography>
        </Box>
        <Box>
          <Button
            variant='outlined'
            startIcon={<GppGoodOutlinedIcon sx={{ width: '19.5px', height: '21.49px' }} />}
            className='active'
          >
            Active
          </Button>
        </Box>
      </Box>

      <Box display='flex' gap='16px' ml='60px' mb='20px'>
        <Button
          variant='outlined'
          startIcon={<img src='/assets/images/icon/user-settings.svg' alt='user-settings' />}
          sx={{ height: '48px' }}
        >
          Permission
        </Button>
        <Button
          variant='outlined'
          startIcon={<img src='/assets/images/icon/invoice.svg' alt='invoice' />}
          sx={{ height: '48px' }}
        >
          Subscriptions
        </Button>
      </Box>

      <Box display='flex' gap='16px'>
        <Stack spacing={2} alignItems='center' justifyContent='center'>
          <IconButton data-variant='primary'>
            <img src='/assets/images/icon/envelope-edit.svg' alt='envelope-edit' />
          </IconButton>
          <IconButton data-variant='primary'>
            <img src='/assets/images/icon/lock.svg' alt='lock' />
          </IconButton>
          <IconButton data-variant='primary'>
            <img src='/assets/images/icon/triangle-exclamation.svg' alt='envelope-edit' />
          </IconButton>

          <IconButton data-variant='trash'>
            <img src='/assets/images/icon/trash.svg' alt='trash' />
          </IconButton>
        </Stack>

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
            <Box
              maxHeight='476px'
              overflow='hidden'
              height='470px'
              padding='16px'
              sx={{
                background: 'linear-gradient(to right, #FE92ED, #B39CF6, #83A3F7,#08A6FE) !important'
              }}
            ></Box>
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
            ></Box>

            <Box
              flex={1}
              bgcolor='rgba(255, 232, 232, 1)'
              borderRadius='12px'
              padding='16px'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
