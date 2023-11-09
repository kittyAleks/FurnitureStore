// Types
import * as types from './types';

export const setProfile: types.BaseContact<types.Profile> = (
  /* state => */ __,
  action,
) => {
    return action.payload;
};
