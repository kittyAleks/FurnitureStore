import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
export type User = {
  email: string;
  password: string;
};

export type UserState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  error: string | null;
  message: string | null;
  status: number | null;
  isAuth: boolean;
};

interface AxiosResponseData {
  message: string;
}

interface AxiosHeaders {
  connection: string;
  'content-length': string;
}

export interface UserResponse {
  data: AxiosResponseData;
  status: number;
  statusText: string | undefined;
  headers: AxiosHeaders;
  config: object;
  request: XMLHttpRequest;
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>;
