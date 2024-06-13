// Core
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';
import {baseService} from '../../../init/axios/baseService';

// Action
const cardsAction = createAction<types.Card>('cards/addCard');

export const setNewCard = createAsyncThunk<
  types.Card, // Return type
  types.Card, // post data
  {rejectValue: string}
>(cardsAction.type, async (dataCard, {rejectWithValue}) => {
  console.log('WWdataCard', dataCard);
  try {
    const axiosResponse = await baseService.post<types.Card>(
      `${API_URL}/cards/add`,
      dataCard,
    );
    return axiosResponse.data;
  } catch (error) {
    console.error('Error adding card:', error);
    return rejectWithValue('Error adding card');
  }
});

export const fetchCards = createAsyncThunk<
  types.Card[],
  void,
  {rejectValue: string}
>('cards/fetchCards', async (_, {rejectWithValue}) => {
  try {
    const axiosResponse = await baseService.get<types.Card[]>(
      `${API_URL}/cards/fetch`,
    );
    return axiosResponse.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return rejectWithValue('Error fetching cards');
  }
});
