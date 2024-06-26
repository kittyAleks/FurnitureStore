import React, {FC, useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

import {getStyles} from '../../screens/Products/style';
import {ThemeContext} from '../../../index';

type LikedProductCardProps = {
  item: {
    _id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };
};

export const LikedProductCard: FC<LikedProductCardProps> = ({item}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <Animated.View style={styles.likedCard}>
      <View>
        <Image
          source={{
            uri: item.imageUrl
              ? item.imageUrl
              : 'https://via.placeholder.com/150',
          }}
          style={styles.likedImage}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
      <View style={[styles.likedInfoContainer]}>
        <Text style={styles.likedTitle}>{item.title}</Text>
        <Text style={styles.likedPrice}>${item.price}</Text>
      </View>
    </Animated.View>
  );
};
