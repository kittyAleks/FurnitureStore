import {createSlice} from '@reduxjs/toolkit';

import * as types from './types';

import * as reducers from './reducers';

const initialState = null;

export const userSlice = createSlice<types.UserState, typeof reducers>({
    name: 'user',
    initialState,
    reducers,
});

export const sliceName = userSlice.name;
export const userActions = userSlice.actions;
export default userSlice.reducer;
