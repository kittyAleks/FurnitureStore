// Core
import axios from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

import * as types from '../types';
import {removeToken, saveToken} from '../../../storage/userTokenStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Action
const userAction = createAction<types.UserResponse>('user/user');

export const createUser = createAsyncThunk<any, any>(
  userAction.type,
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response;
    } catch (err: any) {
      if (err.response) {
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue({message: 'Something went wrong'});
      }
    }
  },
);

export const loginUser = createAsyncThunk<any, any>(
  'user/loginUser',
  async (userData, {rejectWithValue}) => {
    return await axios
      .post(`${API_URL}/users/login`, userData)
      .then(res => {
        saveToken(res.data.token);
        return res;
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
export const loadUser = createAsyncThunk<any>(
  'user/loadUser',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        return {token};
      } else {
        return rejectWithValue({message: 'Token not found'});
      }
    } catch (error) {
      console.log('Error_loading', error);
      return rejectWithValue(error);
    }
  },
);
export const logoutUser = createAsyncThunk<any>(
  'user/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      await removeToken();
    } catch (error) {
      console.log('Error_logoutUser', error);
      return rejectWithValue(error);
    }
  },
);
