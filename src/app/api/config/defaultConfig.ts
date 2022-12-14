import axios, { AxiosInstance } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

import type { Nullable } from '../../../types/commons';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const defaultAxiosInstance = (
  baseUrl: Nullable<string>,
): AxiosInstance =>
  setupCache(
    axios.create({
      baseURL: baseUrl ?? BASE_URL,
      responseType: 'json',
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }),
  );

export default defaultAxiosInstance;
