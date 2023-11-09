import {configureStore} from '@reduxjs/toolkit';
// import {NODE_ENV} from '@env';
import {middleware} from './middleware';

// MarkerGen reducers
import profile from '../../bus/profile/slice';

export const store = configureStore({
  reducer: {
    profile,
  },
  middleware,
  // devTools: NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
