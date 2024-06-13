// Types
import * as types from './types';

export const setCards: types.BaseContact<types.Cards> = (
  /* state => */ __,
  action,
) => {
    return action.payload;
};
