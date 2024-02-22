import React, {FC, useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {PrivateStackScreenProps} from '../../navigation/types';
import {getStyles} from './style';

import {ProductItem} from '../../components/Products/productItem';
import {useProducts} from '../../../bus/products';
import {useUser} from '../../../bus/user';

export const Products: FC<
  PrivateStackScreenProps & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const {logout} = useUser();
  const styles = getStyles(theme);
  const {getProductsList, products} = useProducts();
  const {products: productsList, loading} = products;

  // useFocusEffect(
  //   useCallback(() => {
  //     getProductsList();
  //   }, []),
  // );
  const handleLogout = () => {
    logout();
  };
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
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            data={productsList}
            renderItem={({item}) => <ProductItem item={item} theme={theme} />}
            keyExtractor={item => item._id}
          />
        )}
      </View>
      <Button title={'Logout'} onPress={handleLogout} />
    </SafeAreaView>
  );
};
