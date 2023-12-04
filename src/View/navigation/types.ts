import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Products} from '../screens';

export type PublicStackParamList = {
  Register: Object | undefined;
  Login: undefined;
  Home: undefined;
};
export type PublicStackScreenProps = NativeStackScreenProps<
  PublicStackParamList,
  any
>;
export type PrivateStackParamList = {
  Products: undefined;
  ProductsMain: undefined;
  Cart: undefined;
  cardStyleInterpolator: undefined;
};
export type PrivateStackScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  any
>;
