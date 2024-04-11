import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const IconComponent = ({routeName, isFocused}) => {
  const color = useSharedValue(0);
  const scale = useSharedValue(1);
  const colorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      backgroundColor: interpolateColor(
        color.value,
        [0, 1],
        ['transparent', '#e0c193'],
      ),
    };
  });
  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0.8);
    color.value = withTiming(isFocused ? 1 : 0, {duration: 200});
  }, [isFocused, color]);
  let iconName;
  switch (routeName) {
    case 'Products':
      iconName = isFocused ? 'home' : 'home-outline';
      break;
    case 'Liked':
      iconName = isFocused ? 'heart' : 'heart-outline';
      break;
    case 'Cart':
      iconName = isFocused ? 'cart' : 'cart-outline';
      break;
    default:
      iconName = isFocused ? 'home' : 'home-outline';
      break;
  }

  const textColor = isFocused ? 'white' : 'gray';

  return (
    <Animated.View
      style={[
        colorAnimatedStyle,
        styles.iconContainer,
        {backgroundColor: 'transparent'},
      ]}>
      <Ionicons name={iconName} size={25} color={textColor} />
      <Text style={{color: textColor}}>{routeName}</Text>
    </Animated.View>
  );
};

const CustomTabBar = ({state}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const goToScreen = routeName => {
    console.log('routeName', routeName);
    navigation.navigate(routeName);
  };

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => (
        <TouchableOpacity
          key={route.key}
          onPress={() => goToScreen(route.name)}>
          <IconComponent
            routeName={route.name}
            isFocused={state.index === index}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: '#FFF', // Your desired color for the tabBar background
  },
  iconContainer: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    width: 80,
  },
});

export default CustomTabBar;
