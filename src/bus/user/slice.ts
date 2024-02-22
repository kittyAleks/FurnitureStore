import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import * as types from './types';

import {createUser, loadUser, loginUser, logoutUser} from './thunk/user';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  message: null,
  status: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      console.log('WWWaction', action);
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
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
      const {accessToken, refreshToken, message} = action.payload.data;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.status = action.payload.status;
      state.error = '';
      state.message = message;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
    });
    builder.addCase(loadUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
      state.accessToken = null;
      state.refreshToken = null;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
    });
  },
});

export const sliceName = userSlice.name;
export const {setAuthToken, setRefreshToken} = userSlice.actions;
export default userSlice.reducer;
