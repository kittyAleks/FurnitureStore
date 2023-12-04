import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserTokenT} from './types';

export const saveToken = async (token: UserTokenT) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error saving token for user', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      return token;
    }
  } catch (error) {
    console.error(error);
  }
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error(error);
  }
};
