import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import * as types from './types';

import {createUser, loginUser} from './thunk/user';

const initialState = {
  user: null,
  token: null,
  error: '',
  message: null,
  status: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<types.UserState>) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.error = null;
      state.message = action.payload.message;
      state.status = 200;
      state.user = null;
    });

    builder.addCase(
      createUser.rejected,
      (state, action: PayloadAction<any>) => {
        const {message} = action.payload.data;
        state.error = message;
        state.message = message;
        state.status = action.payload.status;
      },
    );
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {token} = action.payload.data;
      state.token = token;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      const {message} = action.payload.data;
      state.error = message;
      state.status = action.payload.status;
      state.message = message;
    });
  },
});

export const sliceName = userSlice.name;
export const userActions = userSlice.actions;
export default userSlice.reducer;
