import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';
import { HOST_API } from '../utils/config-global';
import { STORAGE_KEY } from '../auth/context/constants';
import { paths } from '../routers/paths';

const getToken = () => localStorage.getItem(STORAGE_KEY);

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Token expired or unauthorized! Logging out...');
      localStorage.removeItem(STORAGE_KEY);
      delete axiosInstance.defaults.headers.common.Authorization;
      window.location.href = paths.auth.login;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: '/api/auth/me',
    signIn: '/api/auth/sign-in'
  }
};
