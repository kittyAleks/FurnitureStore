import {configureStore} from '@reduxjs/toolkit';
import {middleware} from './middleware';

// MarkerGen reducers
import products from '../../bus/products/slice';
import user from '../../bus/user/slice';

export const store = configureStore({
  reducer: {
    user,
    products,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
