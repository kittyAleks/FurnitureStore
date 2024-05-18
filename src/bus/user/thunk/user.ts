// Core
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

import * as types from '../types';
import {removeToken, saveToken} from '../../../storage/userTokenStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseService} from '../../../init/axios/baseService';

// Action
const userAction = createAction<types.UserResponse>('user/user');

export const createUser = createAsyncThunk<any, any>(
  userAction.type,
  async (userData, {rejectWithValue}) => {
    try {
      const response = await baseService.post('/users/register', userData);
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
    return await baseService
      .post('/users/login', userData)
      .then(res => {
        saveToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
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
      const accessToken = await AsyncStorage.getItem('accessToken');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (accessToken && refreshToken) {
        return {accessToken, refreshToken};
      } else {
        console.log('Token_not found');
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
