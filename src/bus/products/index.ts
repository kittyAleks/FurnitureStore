import {useDispatch, useSelector} from '../../hooks';

import {getProducts} from './thunk/products';

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return {
    products,
    getProductsList: () => dispatch(getProducts()),
  };
};
