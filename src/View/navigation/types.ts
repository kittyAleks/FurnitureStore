import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
};
export type PublicStackScreenProps = NativeStackScreenProps<
  PublicStackParamList,
  any
>;
