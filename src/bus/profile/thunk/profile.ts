// Core
import axios from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';

// Action
const profileAction = createAction<types.Profile>('profile/profile');

export const profile = createAsyncThunk(profileAction.type, async () => {
  const axiosResponse = await axios.get<types.Profile>(`${API_URL}/profile`);
  return axiosResponse.data;
});
