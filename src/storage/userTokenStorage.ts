import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenT} from './types';

export const saveToken = async ({accessToken, refreshToken}: TokenT) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error saving token for user', error);
  }
};

export const getToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      return {accessToken, refreshToken};
    }
  } catch (error) {
    console.error(error);
  }
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
  } catch (error) {
    console.error(error);
  }
};
