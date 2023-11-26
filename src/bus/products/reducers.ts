// Types
import * as types from './types';

export const setProducts: types.BaseContact<types.Products> = (
  /* state => */ __,
  action,
) => {
  return action.payload;
};
