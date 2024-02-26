import React, {FC, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';
import {PublicStackScreenProps} from '../../navigation/types';

const {width, height} = Dimensions.get('window');

export const Home: FC<
  PublicStackScreenProps & (LightThemeType | DarkThemeType)
> = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const position = new Animated.ValueXY({x: 11, y: 12});
  const styles = getStyles(theme);

  const goToRegistrationPage = () => {
    navigation.navigate('Register');
  };

  const animateSquare = () => {
    const valueX = Math.random() * width - 50;
    const valueY = Math.random() * height - 50;
    Animated.timing(position, {
      toValue: {x: valueX, y: valueY},
      duration: 1000,
      useNativeDriver: true,
    }).start(() => animateSquare());
  };

  useEffect(() => {
    animateSquare();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.one,
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
            onPress={goToRegistrationPage}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
