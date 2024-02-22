import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';
import {saveToken} from '../../storage/userTokenStorage';
import {store} from '../redux';
import {setAuthToken, setRefreshToken} from '../../bus/user/slice';

export const baseService = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
  },
});

const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  try {
    const response = await baseService.post('/token/refresh', {refreshToken});
    const {accessToken} = response.data;
    await AsyncStorage.setItem('accessToken', accessToken);
  } catch (error) {
    console.log('Error refreshing token', error);
  }
};
baseService.interceptors.response.use(
  response => {
    if (response.data.accessToken && response.data.refreshToken) {
      const dispatch = store.dispatch;
      saveToken({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      dispatch(setAuthToken(response.data.accessToken));
      dispatch(setRefreshToken(response.data.refreshToken));
    }
    return response;
  },
  async error => {
    if (error.response?.status === 401) {
      const dispatch = store.dispatch;
      await refreshAccessToken();
      const newAccessToken = await AsyncStorage.getItem('accessToken');
      dispatch(setAuthToken(newAccessToken));
      error.config.headers.Authorization = `Bearer ${newAccessToken}`;
      return baseService(error.config);
    }
    return Promise.reject(error);
  },
);
