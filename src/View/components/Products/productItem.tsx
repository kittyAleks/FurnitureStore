import React, {FC, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {getStyles} from '../../screens/Products/style';
import {useNavigation} from '@react-navigation/native';
import {ProductItemNavigationProp} from '../../navigation/types';

type ProductItem = {
  _id: string;
  title?: string;
  description?: string;
  price?: string;
  imageUrl?: string;
};
type ProductItemType = {
  item: ProductItem;
  theme?: Object;
};

export const ProductItem: FC<ProductItemType> = ({item, theme}) => {
  const opacity = useSharedValue(1);
  const styles = useMemo(() => getStyles(theme), [theme]);
  const navigation = useNavigation<ProductItemNavigationProp>();
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('#FFF2F6AF');

  const itemStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      backgroundColor: backgroundColor.value,
    };
  });

  // const {getProductsById} = useProducts();
  const goToDetailProduct = () => {
    // getProductsById(item._id);
    backgroundColor.value = withTiming('tomato', {duration: 100}, () => {
      backgroundColor.value = withSpring('#FFF2F6AF');
      scale.value = withSequence(
        withTiming(0.8, {duration: 100}),
        withTiming(1.0, {duration: 100}),
      );
      setTimeout(() => {
        navigation.navigate('ProductDetails', {item: item});
      }, 200);
    });
  };

  return (
    <TouchableOpacity onPress={goToDetailProduct}>
      <Animated.View
        key={item._id}
        style={[itemStyle, styles.card, {backgroundColor, opacity}]}>
        <Image
          source={require('../../../assets/products/table.png')}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>➔</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
