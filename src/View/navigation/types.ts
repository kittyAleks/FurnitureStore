import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Register: Object | undefined;
  Login: undefined;
  Home: undefined;
};
export type PublicStackScreenProps = NativeStackScreenProps<
  PublicStackParamList,
  any
>;
