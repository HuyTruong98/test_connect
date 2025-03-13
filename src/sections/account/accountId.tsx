import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
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
  Tooltip,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { account, dataPermission, newRegistrationsId } from '../../_mock/data';
import PaginationCommon from '../../components/pagination-common/pagination';
import { useRouter } from '../../routers/hooks';
import { ROOTS } from '../../routers/paths';
import { IQueryDashBoard } from '../../types/dashboard';
import Modal from '../../components/modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Label } from '../../components/label';
import { Field, Form } from '../../components/hook-form';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type SendEmailSchemaType = zod.infer<typeof SendEmailSchema>;

const columnWidthsPermission = ['320px', '200px', '200px', '200px', '200px', '200px', '200px'];

export const SendEmailSchema = zod.object({
  subject: zod.string().min(1, { message: 'Subject is required!' })
});

const defaultValues = {
  subject: ''
};

const InfoRow = ({ label, value }: { label: string; value: string; isBold?: boolean }) => (
  <Box
    display='flex'
    justifyContent='space-between'
    sx={{
      marginBottom: '12px',
      '&:last-child': {
        marginBottom: 0
      }
    }}
    height='32px'
    width='100%'
  >
    <Typography variant='body2' color='rgba(46, 47, 49, 1)' fontWeight='400' fontSize='16px' lineHeight='100%'>
      {label}
    </Typography>
    <Typography variant='body2' fontWeight='600' lineHeight='24px' fontSize='16px'>
      {value}
    </Typography>
  </Box>
);

const columnWidths = ['230px', '200px', '200px', '160px', '160px', '160px'];

export function AccountIdView() {
  const router = useRouter();
  const methods = useForm<SendEmailSchemaType>({
    resolver: zodResolver(SendEmailSchema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const [state, setState] = useState<{
    search: string;
    page: number;
    rowsPerPage: number;
    query: IQueryDashBoard;
    appliedQuery: IQueryDashBoard;
    isPermission: boolean;
    dataPermission: any[];
    isOpenModalSendEmail: boolean;
  }>({
    search: '',
    page: 0,
    rowsPerPage: 10,
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
    },
    isPermission: false,
    dataPermission: dataPermission,
    isOpenModalSendEmail: false
  });

  const filteredData = account.filter((row) => row.owner.toLowerCase().includes(state.search.toLowerCase()));

  const handleChangePage = (_event: any, newPage: number) => {
    setState({ ...state, page: newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setState({ ...state, rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  const tooltipTexts = {
    'envelope-edit': 'Send Email',
    lock: 'Reset Password',
    'triangle-exclamation': 'Suspend Clinic',
    trash: 'Delete Clinic'
  };

  const handleCheckboxChange = (rowIndex: number, colIndex: number) => {
    const updatedData = state.dataPermission.map((row, index) => {
      if (index === rowIndex) {
        const newPermissions = [...row.permissions];
        newPermissions[colIndex] = !newPermissions[colIndex];
        return { ...row, permissions: newPermissions };
      }
      return row;
    });
    setState({ ...state, dataPermission: updatedData });
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  });

  return (
    <>
      <Box display='flex' alignItems='center' gap='12px' width='100%' height='48px' justifyContent='space-between'>
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
      {!state.isPermission ? (
        <>
          <Box display='flex' gap='16px' ml='60px' mb='20px' mt='24px'>
            <Button
              variant='outlined'
              startIcon={<img src='/assets/images/icon/user-settings.svg' alt='user-settings' />}
              sx={{ height: '48px' }}
              onClick={() => setState({ ...state, isPermission: true })}
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
              <Tooltip title={tooltipTexts['envelope-edit']} placement='right-start' arrow>
                <IconButton data-variant='primary' onClick={() => setState({ ...state, isOpenModalSendEmail: true })}>
                  <img src='/assets/images/icon/envelope-edit.svg' alt='envelope-edit' />
                </IconButton>
              </Tooltip>
              <Tooltip title={tooltipTexts['lock']} placement='right-start' arrow>
                <IconButton data-variant='primary'>
                  <img src='/assets/images/icon/lock.svg' alt='lock' />
                </IconButton>
              </Tooltip>
              <Tooltip title={tooltipTexts['triangle-exclamation']} placement='right-start' arrow>
                <IconButton data-variant='primary'>
                  <img src='/assets/images/icon/triangle-exclamation.svg' alt='envelope-edit' />
                </IconButton>
              </Tooltip>
              <Tooltip title={tooltipTexts['trash']} placement='right-start' arrow>
                <IconButton data-variant='trash'>
                  <img src='/assets/images/icon/trash.svg' alt='trash' />
                </IconButton>
              </Tooltip>
            </Stack>

            <Box flex={3}>
              <TableContainer component={Paper}>
                <Box maxHeight='781px' overflow='hidden' bgcolor='#EEEEEE'>
                  <Box padding='0 24px'>
                    <Table stickyHeader className='header-table'>
                      <TableHead>
                        <TableRow>
                          <TableCell width={columnWidths[0]}>Owner</TableCell>
                          <TableCell width={columnWidths[1]}>Email</TableCell>
                          <TableCell width={columnWidths[2]}>State</TableCell>
                          <TableCell width={columnWidths[3]}>Clinic</TableCell>
                          <TableCell width={columnWidths[4]}>Registration Date</TableCell>
                          <TableCell width={columnWidths[5]}>Plan</TableCell>
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

                              <TableCell width={columnWidths[1]}>{row.email}</TableCell>
                              <TableCell width={columnWidths[2]}>
                                <Chip label={row.state} color={row.state.toLowerCase() as any} />
                              </TableCell>
                              <TableCell width={columnWidths[3]}>{row.clinic}</TableCell>
                              <TableCell width={columnWidths[4]}>{row.registrationDate}</TableCell>
                              <TableCell width={columnWidths[5]}>{row.plan}</TableCell>
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
              <Card className='clinic-info-card'>
                <CardHeader
                  title={
                    <Typography
                      variant='h6'
                      fontWeight='600'
                      color='rgba(46, 47, 49, 1)'
                      fontSize='18px'
                      lineHeight='28px'
                      letterSpacing='2%'
                    >
                      Clinic Information
                    </Typography>
                  }
                  className='clinic-info-card-header'
                />
                <CardContent className='clinic-info-card-content'>
                  <InfoRow label='Clinic Name:' value='Clinic001' />
                  <InfoRow label='Owner:' value='Floyd Miles' />
                  <InfoRow label='Email:' value='owner001@gmail.com' isBold />
                  <InfoRow label='Phone Number:' value='(319) 555-0115' />
                  <InfoRow label='Registration Date:' value='15 Dec 2024' isBold />
                  <InfoRow label='Plan Type:' value='1-50 Users' isBold />
                </CardContent>
              </Card>

              <TableContainer component={Paper}>
                <Box maxHeight='415px' overflow='hidden' bgcolor='#EEEEEE' height='410px' padding='16px'>
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
                    <IconButton data-variant='expand'>
                      <img src='/assets/images/icon/arrows-expand.svg' alt='Expand Icon' />
                    </IconButton>
                  </Box>

                  <Box maxHeight='444px' overflow='auto'>
                    <Table className='body-table'>
                      <TableBody>
                        {newRegistrationsId.map((item, index) => (
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
            </Box>
          </Box>
        </>
      ) : (
        <Box display='flex' gap={3} mt='16px'>
          <Box flex={3}>
            <TableContainer component={Paper}>
              <Box maxHeight='862px' overflow='hidden' bgcolor='#EEEEEE'>
                <Box padding='0 24px'>
                  <Table stickyHeader className='header-table'>
                    <TableHead>
                      <TableRow>
                        <TableCell width={columnWidthsPermission[0]}>Name</TableCell>
                        <TableCell width={columnWidthsPermission[1]}>Create/Edit Role</TableCell>
                        <TableCell width={columnWidthsPermission[2]}>Add Staff In The Role</TableCell>
                        <TableCell width={columnWidthsPermission[3]}>Create/Edit Room</TableCell>
                        <TableCell width={columnWidthsPermission[4]}>Room</TableCell>
                        <TableCell width={columnWidthsPermission[5]}>Create/Edit Material</TableCell>
                        <TableCell width={columnWidthsPermission[6]}>Add Material In The Room</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </Box>

                <Box maxHeight='700px' overflow='auto' padding='0 24px'>
                  <Table className='body-table'>
                    <TableBody>
                      {state.dataPermission.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          <TableCell width={columnWidthsPermission[0]}>
                            <Box display='flex' alignItems='center' gap='8px'>
                              <Typography
                                noWrap
                                overflow='hidden'
                                textOverflow='ellipsis'
                                maxWidth={columnWidthsPermission[0]}
                              >
                                {row.name}
                              </Typography>
                              {row.owner && <Chip label='Owner' color='owner' />}
                            </Box>
                          </TableCell>
                          {row.permissions.map((permission: boolean, colIndex: number) => (
                            <TableCell key={colIndex} align='left' width={columnWidthsPermission[colIndex + 1]}>
                              <Checkbox
                                checked={permission}
                                onChange={() => handleCheckboxChange(rowIndex, colIndex)}
                                disabled={row.owner}
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Box>
            </TableContainer>
          </Box>
        </Box>
      )}

      <Modal
        open={state.isOpenModalSendEmail}
        onClose={() => {
          setState({ ...state, isOpenModalSendEmail: false });
        }}
        sx={{
          padding: '20px 24px 21px'
        }}
      >
        <Form methods={methods} onSubmit={onSubmit}>
          <Modal.Title
            component='div'
            sx={{
              width: '100%',
              height: '104px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '20px',
              paddingRight: '20px',
              pb: '32px',
              pt: '24px'
            }}
          >
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
              <Typography
                variant='h6'
                fontWeight={600}
                fontSize='24px'
                lineHeight='28px'
                letterSpacing='2%'
                color='rgba(46, 47, 49, 1)'
              >
                Send Email
              </Typography>
              <IconButton data-variant='init' onClick={() => setState({ ...state, isOpenModalSendEmail: false })}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Modal.Title>
          <Modal.Content
            sx={{
              width: 600,
              height: '508px',
              px: '20px',
              pb: '0px'
            }}
          >
            <Label required label='Subject'>
              <Field.Text name='subject' type='text' InputLabelProps={{ shrink: true }} />
            </Label>
          </Modal.Content>
          <Modal.Actions sx={{ padding: '32px 20px 24px' }}>
            <Button variant='outlined' sx={{ width: '292px', height: '40px', borderRadius: '999px' }}>
              Clear
            </Button>
            <Button
              variant='outlined'
              color='inherit'
              className='loading-button'
              sx={{ width: '292px', height: '40px', borderRadius: '999px' }}
              loading={isSubmitting}
              loadingIndicator='Apply...'
            >
              Apply
            </Button>
          </Modal.Actions>
        </Form>
      </Modal>
    </>
  );
}
