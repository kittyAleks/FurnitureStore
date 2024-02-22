// Core
import axios from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';

// Action
const productsAction = createAction<types.ProductsState>('products/products');

export const getProducts = createAsyncThunk(productsAction.type, async () => {
  const axiosResponse = await axios.get(`${API_URL}/products`);
  return axiosResponse.data;
});

export const getProductsById = createAsyncThunk<any, string>(
  'products/productId',
  async (id, {rejectWithValue}) => {
    console.log('getProductsById', `${API_URL}/products/${id}`);
    try {
      const axiosResponse = await axios.get(`${API_URL}/products/${id}`);
      return axiosResponse.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
