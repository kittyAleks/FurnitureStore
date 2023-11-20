// Core
import axios from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

import * as types from '../types';

// Action
const userAction = createAction<types.UserState>('user/user');

export const createUser = createAsyncThunk<types.UserState, types.User>(
  userAction.type,
  async (userData, {rejectWithValue}) => {
    return await axios
      .post(`${API_URL}/users/register`, userData)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        if (err.response) {
          return rejectWithValue(err.response);
        } else {
          return rejectWithValue({message: 'Something went wrong'});
        }
      });
  },
);
export const loginUser = createAsyncThunk<any, any>(
  'user/loginUser',
  async (userData, {rejectWithValue}) => {
    return await axios
      .post(`${API_URL}/users/login`, userData)
      .then(res => {
        console.log('loginUser_res', res);
        return res;
      })
      .catch(err => {
        console.log('err', err);
        if (err.response) {
          return rejectWithValue(err.response);
        } else {
          return rejectWithValue({message: 'Something went wrong'});
        }
      });
  },
);
