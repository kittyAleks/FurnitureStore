import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';

export const Products: FC<LightThemeType | DarkThemeType> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        borderWidth: 1,
      }}>
      <View style={styles.container}>
        <Text>Register</Text>
      </View>
    </SafeAreaView>
  );
};
