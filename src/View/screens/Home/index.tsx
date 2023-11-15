import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';

export const Home: FC<LightThemeType | DarkThemeType> = () => {
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
        <View style={{paddingTop: 150}}>
          <Text style={styles.headerText}>MAGICAL</Text>
          <Text style={styles.subHeaderText}>Furniture</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.descriptionText}>
            Find the best home furniture for your rooms.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              /* handle your action */
            }}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
