import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext} from 'react';
import CheckBox from '@react-native-community/checkbox';

import {ThemeContext} from '../../../index';
import {LightThemeType} from '../../../assets/themes/lightTheme';
import {DarkThemeType} from '../../../assets/themes/darkTheme';
import {getStyles} from './style';
import {PublicStackScreenProps} from '../../navigation/types';

export const Login: FC<
  PublicStackScreenProps & (LightThemeType | DarkThemeType)
> = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome back!</Text>

        <View style={[styles.inputContainer, {marginBottom: 30}]}>
          {/*<Image source={iconSource} style={styles.iconStyle} />*/}
          <TextInput
            placeholder="Email"
            secureTextEntry={true}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.inputContainer}>
          {/*<Image source={iconSource} style={styles.iconStyle} />*/}
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputStyle}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            style={styles.checkbox}
            boxType={'square'}
            onTintColor={'#ABC4AA'}
            onCheckColor={'#ABC4AA'}
            animationDuration={0.2}
            value={isChecked}
            onValueChange={() => setChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetContainer}>
          <Text style={styles.forgetText}>Forget the password?</Text>
        </TouchableOpacity>

        <View style={styles.containerСontinue}>
          <View style={styles.line} />
          <Text style={styles.text}>or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialMediaContainer}>
          {/*<Image*/}
          {/*  source={require('path/to/facebook/icon.png')}*/}
          {/*  style={styles.icon}*/}
          {/*/>*/}
          {/*<Image*/}
          {/*  source={require('path/to/google/icon.png')}*/}
          {/*  style={styles.icon}*/}
          {/*/>*/}
          {/*<Image*/}
          {/*  source={require('path/to/apple/icon.png')}*/}
          {/*  style={styles.icon}*/}
          {/*/>*/}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signinText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
