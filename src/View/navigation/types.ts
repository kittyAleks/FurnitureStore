import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type PublicStackParamList = {
  Register: Object | undefined;
  Login: undefined;
  Home: undefined;
};
export type PublicStackScreenProps = NativeStackScreenProps<
  PublicStackParamList,
  any
>;

type ProductItem = {
  _id: string;
  title?: string;
  description?: string;
  price?: string;
  imageUrl?: string;
};
export type ProductItemNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'Products'
>;

export type ProductDetailsRouteProp = RouteProp<
  PrivateStackParamList,
  'ProductDetails'
>;

export type PrivateStackParamList = {
  Products: undefined;
  ProductDetails: {item: ProductItem};
  ProductsMain: undefined;
  Cart: undefined;
  cardStyleInterpolator: undefined;
};
export type PrivateStackScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  any
>;
