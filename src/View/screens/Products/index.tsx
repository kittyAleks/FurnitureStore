import React, {FC, useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';
import {PrivateStackParamList} from '../../navigation/Private';

import {ProductItem} from '../../components/Products/productItem';
import {useProducts} from '../../../bus/products';

export const Products: FC<
  PrivateStackParamList & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const {getProductsList, products} = useProducts();

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.one,
      }}>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem item={item} theme={theme} />}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={<View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};
