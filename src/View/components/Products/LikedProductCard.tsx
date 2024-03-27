import React, {FC} from 'react';
import {Text, View} from 'react-native';

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
  console.log('DDDitem', item);
  return (
    <View key={item._id}>
      <Text>{item.title}</Text>
    </View>
  );
};
