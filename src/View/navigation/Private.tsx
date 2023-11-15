import React, {FC, useContext} from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Book} from './book';
import {Home} from '../screens/Home';
import {SafeAreaView} from 'react-native';
import {ThemeContext} from '../../index';

export type PrivateStackParamList = {
  Home: undefined;
};

export type PrivateStackScreenProps =
  NativeStackScreenProps<PrivateStackParamList>;

export const Private: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  const {theme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <Navigator initialRouteName={'Home'}>
      <Screen
        options={{headerShown: false}}
        name={Book.Home}
        component={Home}
      />
    </Navigator>
  );
};
