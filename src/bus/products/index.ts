import {useDispatch, useSelector} from '../../hooks';

import {getProducts, getProductsById} from './thunk/products';

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return {
    products,
    getProductsList: () => dispatch(getProducts()),
    // getProductsById: (id: string) => dispatch(getProductsById(id)),
  };
};
