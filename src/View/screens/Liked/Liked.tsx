import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {PrivateStackScreenProps} from '../../navigation/types';
import {getStyles} from './style';

export const Liked: FC<
  PrivateStackScreenProps & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.quantity}>0 products</Text>
      <Image
        source={require('../../../assets/liked/Book.png')}
        style={{width: 276, height: 200, marginTop: 100}}
      />
      <Text style={styles.mainText}>Your wishlist is empty</Text>
      <Text style={styles.secondText}>
        It seems that you haven't added anything to your wishlist yet.
      </Text>
    </View>
  );
};
