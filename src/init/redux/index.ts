import {configureStore} from '@reduxjs/toolkit';
import {middleware} from './middleware';

// MarkerGen reducers
import cards from '../../bus/cards/slice';
import likedProduct from '../../bus/likedProduct/slice';
import products from '../../bus/products/slice';
import user from '../../bus/user/slice';

export const store = configureStore({
  reducer: {
    user,
    products,
    likedProduct,
    cards,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
