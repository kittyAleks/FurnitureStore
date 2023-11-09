import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Onboarding: undefined;
  Login: undefined;
};
export type PublicStackScreenProps = NativeStackScreenProps<
  PublicStackParamList,
  any
>;
