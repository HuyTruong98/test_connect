import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z as zod } from 'zod';
import { signInWithPassword } from '../../auth/context/action';
import { useAuth } from '../../auth/context/authProvider';
import { Field, Form } from '../../components/hook-form';
import { Label } from '../../components/label';
import { ButtonLoading } from '../../layout/core/loading-button';
import { useRouter } from '../../routers/hooks';
import { CustomTypography, LogoBox, StyledBox, StyledGridContainer } from './styles';

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' })
});

const defaultValues = {
  email: '',
  password: ''
};

export function LoginView() {
  const { login } = useAuth();
  const router = useRouter();
  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const token = await signInWithPassword({ email: data.email, password: data.password });
    if (token) {
      login(token);
      router.refresh();
    }
  });
  return (
    <StyledGridContainer container>
      <Grid item xs={12} md={5} display='flex' justifyContent='center'>
        <Form methods={methods} onSubmit={onSubmit}>
          <StyledBox>
            <Box width='100%' height='100%' display='flex' flexDirection='column' alignItems='center'>
              <img src='/logo/logo.png' alt='Logo' style={{ height: '40px', marginBottom: '40px' }} />

              <CustomTypography>Admin Login</CustomTypography>
              <Label label='Email'>
                <Field.Text name='email' type='email' InputLabelProps={{ shrink: true }} />
              </Label>
              <Label label='Password'>
                <Field.Text name='password' type='password' InputLabelProps={{ shrink: true }} />
              </Label>
              <ButtonLoading
                fullWidth
                color='inherit'
                size='large'
                type='submit'
                variant='contained'
                loading={isSubmitting}
                loadingIndicator='Sign in...'
                sx={{ marginTop: '8px' }}
              >
                Login
              </ButtonLoading>
            </Box>
          </StyledBox>
        </Form>
      </Grid>
      <Grid item xs={12} md={5} display='flex' justifyContent='center'>
        <LogoBox>
          <img src='/assets/background/test_connect_01.png' alt='Logo' style={{ width: '100%' }} />
        </LogoBox>
      </Grid>
    </StyledGridContainer>
  );
}
