import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';

import {getProducts} from './thunk/products';
import * as types from '../products/types';

const initialState = {
  products: null,
  loading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<types.ProductsState>) => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.updatedProducts;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      });
    // .addCase(getProductsById.fulfilled, (state, action) => {
    // });
  },
});

export const sliceName = productsSlice.name;
export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
