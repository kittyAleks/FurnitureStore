// Core
import axios from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';

// Action
const __thunkName__Action = createAction<types.__entityName__(pascalCase)>('__entityName__/__thunkName__');

export const __thunkName__ = createAsyncThunk(__thunkName__Action.type, async () => {
  const axiosResponse = await axios.get<types.__entityName__(pascalCase)>(`${API_URL}/__thunkName__`);
  return axiosResponse.data;
});
