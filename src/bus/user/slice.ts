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
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    // setRefreshToken: (state, action) => {
    //   console.log('Обновление refreshToken', action.payload);
    //   state.refreshToken = action.payload;
    // },
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
        state.message = action.payload?.data?.message;
        state.status = action.payload.status;
        state.isAuth = false;
      },
    );
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {accessToken, refreshToken, message} = action.payload.data;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.status = action.payload.status;
      state.error = '';
      state.message = message;
      state.isAuth = true;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
      state.isAuth = false;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
      state.isAuth = true;
    });
    builder.addCase(loadUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuth = false;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
      state.isAuth = false;
    });
  },
});

export const sliceName = userSlice.name;
export const {setAccessToken} = userSlice.actions;
export default userSlice.reducer;
