import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {getStyles} from '../../screens/Products/style';
type ProductItem = {
  id?: string;
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
  console.log('item', item);
  const styles = getStyles(theme);
  return (
    <View style={styles.card}>
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
    </View>
  );
};
