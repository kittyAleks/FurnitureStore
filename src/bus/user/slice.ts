import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import * as types from './types';

import {createUser, loadUser, loginUser, logoutUser} from './thunk/user';

const initialState = {
  user: null,
  token: null,
  error: null,
  message: null,
  status: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<types.UserState>) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.message = action.payload.data.message;
      state.status = action.payload.status;
      state.error = '';
    });

    builder.addCase(
      createUser.rejected,
      (state, action: PayloadAction<any>) => {
        const {message} = action.payload.data;
        state.error = message;
        state.status = action.payload.status;
      },
    );
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {token, message} = action.payload.data;
      state.token = token;
      state.status = action.payload.status;
      state.error = '';
      state.message = message;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.error = null;
    });
    builder.addCase(loadUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
      state.token = null;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.token = null;
      state.error = null;
    });
  },
});

export const sliceName = userSlice.name;
export const userActions = userSlice.actions;
export default userSlice.reducer;
