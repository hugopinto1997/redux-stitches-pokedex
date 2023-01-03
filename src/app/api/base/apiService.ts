import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import type { Nullable } from '../../../types/commons';
import { defaultAxiosInstance } from '../config/defaultConfig';

export default class ApiService {
  private client: AxiosInstance;

  private uri: string;

  constructor(baseUrl: Nullable<string>, uri: string) {
    this.uri = uri;
    this.client = defaultAxiosInstance(baseUrl);
  }

  async request<T, D = unknown>(
    reqConfig: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, D>> {
    try {
      const response: AxiosResponse<T> = await this.client({
        ...reqConfig,
        url: `${this.uri}${reqConfig.url}`,
      });
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw axiosError;
    }
  }
}
