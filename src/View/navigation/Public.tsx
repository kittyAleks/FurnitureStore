import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {PublicStackParamList} from './types';
import {Book} from './book';

import {Home, Login} from '../screens';

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const Public: FC = () => {
  return (
    <Stack.Navigator initialRouteName={Book.Onboarding}>
      <Stack.Group>
        <Stack.Screen
          name={Book.Register}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
          component={Register}
        />
        <Stack.Screen
          name={Book.Login}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
          component={Login}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
