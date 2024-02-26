import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux';

import {API_URL} from '@env';

import {getToken, removeToken} from '../../storage/userTokenStorage';
import {setAccessToken} from '../../bus/user/slice';

export const baseService = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
  },
});

const refreshAccessToken = async (error: any) => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  try {
    const response = await baseService.post('users/token/refresh', {
      refreshToken,
    });
    const {accessToken} = response.data;

    await AsyncStorage.setItem('accessToken', accessToken); // Обновляем accessToken в хранилище
    store.dispatch(setAccessToken(accessToken)); // Обновляем accessToken в Redux store
    error.config.headers.Authorization = accessToken;
    baseService.defaults.headers.common.Authorization = accessToken;

    return Promise.resolve(accessToken);
  } catch (refreshError) {
    console.error('Unable to refresh token', refreshError);
    await removeToken();
  }
};

baseService.interceptors.request.use(async config => {
  try {
    const res = await getToken();
    if (res) {
      const {accessToken} = res;
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
    } else {
      console.log('No token');
    }
  } catch (error) {
    console.log('Error', error);
  }
  return config;
});

baseService.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response?.status === 401) {
      return await refreshAccessToken(error);
    }
    return Promise.reject(error);
  },
);
