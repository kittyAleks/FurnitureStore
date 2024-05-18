import {
  ActionReducerMapBuilder,
  createSlice,
} from '@reduxjs/toolkit';

import * as types from './types';
import {saveLikedProduct} from './thunk/likedProduct';

const initialState = {
  likedProducts: null,
  loading: false,
};

export const likedProductSlice = createSlice({
  name: 'likedProduct',
  initialState,
  reducers: {},
  extraReducers: (
    builder: ActionReducerMapBuilder<types.LikedProductsState>,
  ) => {
    builder.addCase(saveLikedProduct.pending, (state, action) => {
      state.loading = true;
      state.likedProducts = null;
    });
    builder
      .addCase(saveLikedProduct.fulfilled, (state, action) => {
        state.likedProducts = action.payload;
        state.loading = false;
      })
      .addCase(saveLikedProduct.rejected, (state, action) => {
        state.loading = false;
        state.likedProducts = null;
      });
  },
});

export const sliceName = likedProductSlice.name;
export const likedProductActions = likedProductSlice.actions;
export default likedProductSlice.reducer;
