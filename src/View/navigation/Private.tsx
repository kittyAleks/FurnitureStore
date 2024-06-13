import React, {FC, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {Book} from './book';
import {Products} from '../screens';
import {PrivateStackParamList} from './types';
import {ProductDetails} from '../components/Products/ProductDetails/ProductDetails';
import {Liked} from '../screens/Liked/Liked';
import CustomTabBar from './CustomTabBar/CustomTabBar';
import {PaymentScreen} from '../screens/Payment';

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
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Products"
        component={ProductsStackNavigator}
        options={{headerShown: false, title: 'Products'}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{title: 'Liked', headerShown: false}}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{title: 'Payment', headerShown: false}}
      />
    </Tab.Navigator>
  );
};
