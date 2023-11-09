import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type Profile = Array<any>;
export type ProfileState = Profile | null;

// Contracts
export type BaseContact<T = any> = CaseReducer<ProfileState, PayloadAction<T>>;
