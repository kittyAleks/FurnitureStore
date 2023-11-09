import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type User = Array<any>;
export type UserState = User | null;

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>;
