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
import {useUser} from '../../../bus/user';
import {User, UserResponse} from '../../../bus/user/types';

export const Register: FC<
  PublicStackScreenProps & (LightThemeType | DarkThemeType)
> = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const {addUser} = useUser();

  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const registerUser = async () => {
    const data: User = {
      email: email,
      password: password,
    };
    try {
      const response = await addUser(data);
      if (response.payload.status === 400 || response.payload.status === 500) {
        setError(response.payload.data.message);
      } else {
        navigation.navigate('Login');
      }
    } catch (error: any) {
      setError(error.toString());
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.one,
      }}>
      <View style={[styles.container]}>
        <Text style={styles.header}>Create your Account!</Text>

        <View style={[styles.inputContainer, {marginBottom: 30}]}>
          {/*<Image source={iconSource} style={styles.iconStyle} />*/}
          <TextInput
            onChangeText={setEmail}
            placeholder="Email"
            secureTextEntry={true}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.inputContainer}>
          {/*<Image source={iconSource} style={styles.iconStyle} />*/}
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputStyle}
          />
        </View>
        <Text style={styles.error}>{error}</Text>
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

        <TouchableOpacity onPress={registerUser} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signinText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
