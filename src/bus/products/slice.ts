import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './thunk/products';

const initialState = {
  products: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(getProducts.pending, state => {
      //   state.loading = true;
      // })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log('action_fulfilled', action);
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log('action_rejected', action);
      });
  },
});

export const sliceName = productsSlice.name;
export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
