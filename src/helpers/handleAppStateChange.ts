import {Appearance} from 'react-native';
import {DarkTheme} from '../assets/themes/darkTheme';
import {LightTheme} from '../assets/themes/lightTheme';

export const handleAppStateChange =
  (setTheme: any) => (nextAppState: string) => {
    if (nextAppState === 'active') {
      const newDeviceTheme = Appearance.getColorScheme();
      setTheme(newDeviceTheme === 'dark' ? DarkTheme : LightTheme);
    }
  };
