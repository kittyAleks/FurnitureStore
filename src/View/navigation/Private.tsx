import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Book} from './book';
import {Home} from '../screens/Home';

export type PrivateStackParamList = {
  Home: undefined;
};

export type PrivateStackScreenProps =
  NativeStackScreenProps<PrivateStackParamList>;

export const Private: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator initialRouteName={'LocationSettings'}>
      <Screen
        options={{headerShown: false}}
        name={Book.Home}
        component={Home}
      />
    </Navigator>
  );
};
