import React, {useEffect} from 'react';
import {Text, View, Animated} from 'react-native';

export const ProductDetails = () => {
  const opacity = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
  }, [opacity]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: opacity,
      }}>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
      <Text>ProductDetails!</Text>
    </Animated.View>
  );
};
