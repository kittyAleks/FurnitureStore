import React, {FC} from 'react';
import {Image, Text} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {PrivateStackScreenProps} from '../../navigation/types';
import {getStyles} from './style';
import {LikedProductCard} from '../../components/Products/LikedProductCard';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 20;
const HEADER_HEIGHT = 120;
export const Liked: FC<
  PrivateStackScreenProps & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  const insets = useSafeAreaInsets();
  const opacity = useSharedValue(1);
  const headerHeight = useSharedValue(HEADER_HEIGHT);
  const translateY = useSharedValue(0);

  const scale = useSharedValue(1);

  // const {likeProducts} = useLikedProduct();
  // console.log('likeProducts', likeProducts);
  const likeProducts = [
    {
      _id: '1',
      title: 'Product 1',
      description: 'Description 1',
      price: '100',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '2',
      title: 'Product 2',
      description: 'Description 2',
      price: '200',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '3',
      title: 'Product 3',
      description: 'Description 3',
      price: '300',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '4',
      title: 'Product 4',
      description: 'Description 4',
      price: '400',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '5',
      title: 'Product 5',
      description: 'Description 5',
      price: '500',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '6',
      title: 'Product 6',
      description: 'Description 6',
      price: '600',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '7',
      title: 'Product 7',
      description: 'Description 7',
      price: '700',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      _id: '8',
      title: 'Product 8',
      description: 'Description 8',
      price: '800',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const onScrollHandler = useAnimatedScrollHandler(event => {
    const scrollY = event.contentOffset.y;
    console.log('scrollY', scrollY);
    headerHeight.value = scrollY;
    translateY.value = interpolate(
      scrollY,
      [0, HEADER_HEIGHT],
      [0, 100],
      Extrapolation.CLAMP,
    );
  });
  const animatedHeightStyle = useAnimatedStyle(() => ({
    opacity: interpolate(headerHeight.value, [0, HEADER_HEIGHT], [1, 0.8]),
    height: interpolate(
      headerHeight.value,
      [0, HEADER_HEIGHT],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT + insets.top],
      Extrapolation.CLAMP,
    ),
  }));

  const itemAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          animatedHeightStyle,
          {
            backgroundColor: 'orange',
            justifyContent: 'center',
            height: HEADER_HEIGHT,
            opacity,
          },
        ]}>
        <Animated.Text
          style={[
            // animatedTextStyle,
            {
              fontSize: 20,
              fontWeight: '700',
              paddingTop: insets.top,
              paddingBottom: 30,
              opacity,
            },
          ]}>
          My products
        </Animated.Text>
      </Animated.View>

      {likeProducts && likeProducts.length > 0 ? (
        <Animated.FlatList
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          numColumns={2}
          data={likeProducts}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <LikedProductCard
                itemAnimatedStyle={itemAnimatedStyle}
                item={item}
              />
            );
          }}
        />
      ) : (
        <>
          <Text style={styles.quantity}>0 products</Text>
          <Image
            source={require('../../../assets/liked/Book.png')}
            style={{width: 276, height: 200, marginTop: 100}}
          />
          <Text style={styles.mainText}>Your wishlist is empty</Text>
          <Text style={styles.secondText}>
            It seems that you haven't added anything to your wishlist yet.
          </Text>
        </>
      )}
    </>
  );
};
