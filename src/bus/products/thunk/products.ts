// Core
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';
import {baseService} from '../../../init/axios/baseService';

// Action
const productsAction = createAction<types.ProductsState>('products/products');

export const getProducts = createAsyncThunk(productsAction.type, async () => {
  const axiosResponse = await baseService.get(`${API_URL}/products`);
  console.log('axiosResponse', axiosResponse);
  return axiosResponse.data;
});

// export const getProductsById = createAsyncThunk<any, string>(
//   'products/productId',
//   async (id, {rejectWithValue}) => {
//     try {
//       const axiosResponse = await baseService.get(`${API_URL}/products/${id}`);
//       return axiosResponse.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
