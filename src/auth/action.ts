import axios, { endpoints } from '../api/axios';
import { setLocal } from '../utils/utils';

// ----------------------------------------------------------------------

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ email, password }: SignInParams): Promise<void> => {
  try {
    const params = { email, password };

    const res = await axios.post(endpoints.auth.signIn, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    setLocal(accessToken);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};
