import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PublicStackParamList} from './types';
import {Book} from './book';

import {Login} from '../screens';

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const Public: FC = () => {
  return (
    <Stack.Navigator initialRouteName={Book.Onboarding}>
      <Stack.Group>
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
