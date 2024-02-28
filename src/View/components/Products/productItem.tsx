import React, {FC, useEffect, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View, Animated} from 'react-native';

import {getStyles} from '../../screens/Products/style';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  PrivateStackParamList,
  ProductItemNavigationProp,
} from '../../navigation/types';

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
  const opacity = new Animated.Value(0);
  const styles = useMemo(() => getStyles(theme, opacity), [theme, opacity]);
  const navigation = useNavigation<ProductItemNavigationProp>();

  // const {getProductsById} = useProducts();
  const goToDetailProduct = () => {
    // getProductsById(item._id);
    navigation.navigate('ProductDetails', {item: item});
  };

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <>
      <Animated.View key={item._id} style={styles.card}>
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
            <TouchableOpacity onPress={goToDetailProduct} style={styles.button}>
              <Text>➔</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
