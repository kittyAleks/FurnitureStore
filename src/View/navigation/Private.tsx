import React, {FC, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import {Book} from './book';
import {ThemeContext} from '../../index';
import {Products} from '../screens';

const Tab = createBottomTabNavigator();

const CartScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Cart!</Text>
    </View>
  );
};

const ProductsStack = createNativeStackNavigator();
const ProductsStackNavigator = () => {
  return (
    <ProductsStack.Navigator initialRouteName={Book.Products}>
      <ProductsStack.Screen
        name={Book.Products}
        component={Products}
        options={{headerShown: false}}
      />
    </ProductsStack.Navigator>
  );
};

export const Private: FC = () => {
  const {theme} = useContext(ThemeContext);
  console.log(theme);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Products') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={'Products'}
        component={ProductsStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name={'Cart'} component={CartScreen} />
    </Tab.Navigator>
  );
};
