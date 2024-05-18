import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
export type UserData = {
  _id: string;
  email: string;
  likedProducts: string[];
  cartProducts: string[];
};

export type UserState = {
  user: UserData | null;
  accessToken: string | null;
  refreshToken: string | null;
  error: string | null;
  message: string | null;
  status: number | null;
  isAuth: boolean;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoadUserResponse = {
  // accessToken: string;
  // refreshToken: string;
  user: UserData;
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
