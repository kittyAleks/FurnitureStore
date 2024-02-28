import React, {FC, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import {Book} from './book';
import {ThemeContext} from '../../index';
import {Products} from '../screens';
import {PrivateStackParamList} from './types';
import {ProductDetails} from '../components/Products/ProductDetails/ProductDetails';
import {Liked} from '../screens/Liked/Liked';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Tab = createBottomTabNavigator();

const CartScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Cart!</Text>
    </View>
  );
};

const ProductsStack = createNativeStackNavigator<PrivateStackParamList>();
const ProductsStackNavigator = () => {
  return (
    <ProductsStack.Navigator initialRouteName={Book.Products}>
      <ProductsStack.Screen
        name={Book.Products}
        component={Products}
        options={{headerShown: false}}
      />
      <ProductsStack.Screen
        name={Book.ProductDetails}
        component={ProductDetails}
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
          } else if (route.name === 'Liked') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.background.one,
        },
      })}>
      <Tab.Screen
        name={'Products'}
        component={ProductsStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Cart'}
        component={CartScreen}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader title={route.name} navigation={navigation} />
          ),
        })}
      />
      <Tab.Screen
        name={Book.Liked}
        component={Liked}
        options={({navigation, route}) => ({
          header: () => (
            <CustomHeader title={route.name} navigation={navigation} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
