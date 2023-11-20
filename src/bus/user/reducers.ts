// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (
  /* state => */ __,
  action,
) => {
    return action.payload;
};
