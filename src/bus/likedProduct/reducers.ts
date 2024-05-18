// Types
import * as types from './types';

export const setLikedProduct: types.BaseContact<types.LikedProduct> = (
  /* state => */ __,
  action,
) => {
    return action.payload;
};
