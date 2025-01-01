// src/api/auth.api.ts
import axios, { AxiosResponse } from 'axios';
import { Api } from '../components/config/api.config';


export interface ILoginApiParams {
  username: string;
  password: string;
}

export interface ILoginApiResponse {
  message: string;
  accessToken: string;
  username: string;
}

const axiosInstance = axios.create({
  baseURL: Api,
  timeout: 2000,
});

export const loginApi = async (data: ILoginApiParams): Promise<AxiosResponse<ILoginApiResponse>> => {
  return axiosInstance.post('/auth/login', data);
};
