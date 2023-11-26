import React, {FC} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';
import {PrivateStackParamList} from '../../navigation/Private';

import {ProductItem} from '../../components/Products/productItem';

const data = [
  {
    id: '1',
    title: 'Table and chair set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_1',
  },
  {
    id: '2',
    title: 'Modern dining room set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_2',
  },
  {
    id: '3',
    title: 'Modern dining room set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_2',
  },
  {
    id: '4',
    title: 'Modern dining room set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_2',
  },
  {
    id: '5',
    title: 'Modern dining room set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_2',
  },
  {
    id: '6',
    title: 'Modern dining room set',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.',
    price: '$ 180',
    imageUrl: 'URL_изображения_2',
  },
];
// const ItemSeparator = () => <View style={styles.separator} />;
export const Products: FC<
  PrivateStackParamList & (LightThemeType | DarkThemeType)
> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.one,
      }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <ProductItem item={item} theme={theme} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={<View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};
