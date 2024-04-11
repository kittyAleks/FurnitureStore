import React, {FC, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  interpolateColor,
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
  const styles = useMemo(() => getStyles(theme), [theme]);
  const navigation = useNavigation<ProductItemNavigationProp>();
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('#FFF2F6AF');
  const progress = useSharedValue(0);

  const itemStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#FFFFFF', '#e0c193'],
    );
    return {
      transform: [{scale: scale.value}],
      backgroundColor,
    };
  });

  const goToDetailProduct = () => {
    progress.value = withTiming(1, {duration: 100}, () => {
      progress.value = withSpring(0, {damping: 2});
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
        style={[itemStyle, styles.card, backgroundColor]}>
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
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
