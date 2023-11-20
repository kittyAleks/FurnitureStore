import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
export type User = {
  email: string;
  password: string;
};

export interface UserState {
  user: User | null;
  token: string | null;
  error: string | null;
  message: string | null;
  status: number | null;
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>;
