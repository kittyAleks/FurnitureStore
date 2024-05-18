import React, {FC, useEffect} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {useContext} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {PrivateStackScreenProps} from '../../navigation/types';
import {getStyles} from './style';

import {ProductItem} from '../../components/Products/productItem';
import {useProducts} from '../../../bus/products';
import {useUser} from '../../../bus/user';

const HEADER_MAX_HEIGHT = 140;
const HEADER_MIN_HEIGHT = 20;
const HEADER_HEIGHT = 120;
export const Products: FC<
  PrivateStackScreenProps & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const {logout} = useUser();
  const styles = getStyles(theme);
  const {getProductsList, products} = useProducts();
  console.log('ЦЦproducts', products);
  const {products: productsList, loading} = products;

  const height = useSharedValue(HEADER_HEIGHT);
  const opacity = useSharedValue(1);
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    const scrollY = event.contentOffset.y;
    height.value = scrollY;
    translateX.value = interpolate(
      scrollY,
      [0, HEADER_HEIGHT],
      [0, 100],
      Extrapolation.CLAMP,
    );
  });
  const animatedHeightStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      height.value,
      [0, HEADER_HEIGHT],
      [1, 0.5],
      Extrapolation.CLAMP,
    ),
    height: interpolate(
      height.value,
      [0, HEADER_HEIGHT],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT + insets.top],
      Extrapolation.CLAMP,
    ),
  }));
  useEffect(() => {
    height.value = withRepeat(withTiming(HEADER_HEIGHT, {duration: 1500}));
  }, []);

  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <>
      <Animated.View
        style={[
          animatedHeightStyle,
          {
            backgroundColor: '#4A90E2',
            justifyContent: 'center',
            height: HEADER_HEIGHT,
            opacity,
          },
        ]}>
        <Animated.Text
          style={[
            {
              fontSize: 20,
              fontWeight: '700',
              paddingTop: insets.top,
              paddingBottom: 30,
              color: '#FFFFFF',
            },
          ]}>
          My products
        </Animated.Text>
      </Animated.View>

      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <Animated.FlatList
            onScroll={onScrollHandler}
            scrollEventThrottle={16}
            data={productsList}
            renderItem={({item}) => <ProductItem item={item} theme={theme} />}
            keyExtractor={item => item._id}
          />
        )}
      </View>
      <Button title={'Logout'} onPress={handleLogout} />
    </>
  );
};
