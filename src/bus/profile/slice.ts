import {createSlice} from '@reduxjs/toolkit';

import * as types from './types';

import * as reducers from './reducers';

const initialState = null;

export const profileSlice = createSlice<types.ProfileState, typeof reducers>({
    name: 'profile',
    initialState,
    reducers,
});

export const sliceName = profileSlice.name;
export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
