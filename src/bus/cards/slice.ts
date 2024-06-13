import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';

import * as types from './types';
import {fetchCards, setNewCard} from './thunk/cards';

const initialState = {
  cards: [],
  loading: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<types.CardsState>) => {
    builder.addCase(setNewCard.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setNewCard.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(setNewCard.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchCards.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const sliceName = cardsSlice.name;
export const cardsActions = cardsSlice.actions;
export default cardsSlice.reducer;
