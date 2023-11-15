import React, {FC, useContext} from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Book} from './book';
import {ThemeContext} from '../../index';
import {Products} from '../screens';

export type PrivateStackParamList = {
  Products: undefined;
};

export type PrivateStackScreenProps =
  NativeStackScreenProps<PrivateStackParamList>;

export const Private: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  const {theme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <Navigator initialRouteName={'Products'}>
      <Screen
        options={{headerShown: false}}
        name={Book.Products}
        component={Products}
      />
    </Navigator>
  );
};
