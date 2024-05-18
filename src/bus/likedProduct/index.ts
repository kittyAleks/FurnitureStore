import {useDispatch, useSelector} from '../../tools/hooks';
import {
  getLikedProducts,
  saveLikedProduct,
  unLikedProduct,
} from './thunk/likedProduct';

export const useLikedProduct = () => {
  const dispatch = useDispatch();
  const likeProducts = useSelector(state => state.likedProduct.likedProducts);
  const loading = useSelector(state => state.likedProduct.loading);

  return {
    loading,
    likeProducts,
    likedProduct: (id: string) => {
      dispatch(saveLikedProduct(id));
    },
    fetchLikedProducts: () => {
      dispatch(getLikedProducts());
    },
    unLikedProduct: (id: string) => {
      dispatch(unLikedProduct(id));
    },
    // unLikedProduct: (id: string) => {
    //   dispatch(saveUnLikedProduct(id));
    // },
  };
};
