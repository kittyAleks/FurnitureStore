// Core
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// API
import {API_URL} from '@env';

// Types
import * as types from '../types';
import {baseService} from '../../../init/axios/baseService';

// Action
const likedProductAction = createAction<types.LikedProductsState>(
  'likedProduct/saveLikedProduct',
);

export const saveLikedProduct = createAsyncThunk<types.LikedProductT[]>(
  likedProductAction.type,
  async (id, {rejectWithValue}) => {
    try {
      const axiosResponse = await baseService.get<types.LikedProductT[]>(
        `${API_URL}/products/liked/${id}`,
      );
      console.log('`WWewaxiosResponse', axiosResponse.data);
      return axiosResponse.data;
    } catch (error) {
      console.error('Error in saveLikedProduct', error);
      return rejectWithValue(error);
    }
  },
);

export const getLikedProducts = createAsyncThunk<types.LikedProductT[]>(
  likedProductAction.type,
  async (_, {rejectWithValue}) => {
    try {
      const axiosResponse = await baseService.get<types.LikedProductT[]>(
        `${API_URL}/products/liked`,
      );
      console.log('getLikedProductResponse', axiosResponse.data);
      return axiosResponse.data;
    } catch (error) {
      console.error('Error in getLikedProducts', error);
      return rejectWithValue(error);
    }
  },
);

const unLikedProductAction = createAction<types.LikedProductsState>(
  'likedProduct/unLikedProduct',
);

export const unLikedProduct = createAsyncThunk(
  unLikedProductAction.type,
  async (id, {dispatch, rejectWithValue}) => {
    console.log('unLikedProduct');
    try {
      await baseService.delete(`${API_URL}/products/liked/${id}`);
      dispatch(getLikedProducts());
    } catch (error) {
      console.error('Error in unLikeProduct', error);
      return rejectWithValue(error);
    }
  },
);

// export const saveUnLikedProduct = createAsyncThunk<
//   types.LikedProductsState,
//   string
// >(unLikedProductAction.type, async (unLikedProductId, {rejectWithValue}) => {
//   try {
//     const axiosResponse = await baseService.get<types.LikedProductsState>(
//       `${API_URL}/products/unliked/${unLikedProductId}`,
//     );
//     console.log('axiosResponse', axiosResponse.data);
//     return axiosResponse.data;
//   } catch (error) {
//     console.error('Error in saveUnLikedProduct', error);
//     return rejectWithValue(error);
//   }
// });
