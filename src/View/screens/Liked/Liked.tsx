import React, {FC} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {PrivateStackScreenProps} from '../../navigation/types';
import {getStyles} from './style';
import {useLikedProduct} from '../../../bus/likedProduct';
import {LikedProductCard} from '../../components/Products/LikedProductCard';

export const Liked: FC<
  PrivateStackScreenProps & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const {likeProducts} = useLikedProduct();

  return (
    <View style={styles.container}>
      {likeProducts && likeProducts.length > 0 ? (
        <FlatList
          numColumns={2}
          data={likeProducts}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return <LikedProductCard item={item} />;
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
    </View>
  );
};
