import React, {createContext, FC, useEffect, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Appearance, ColorSchemeName, AppState} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import {store} from './init';
import {Navigation} from './View/navigation';
import {DarkTheme} from './assets/themes/darkTheme';
import {LightTheme} from './assets/themes/lightTheme';
import {handleAppStateChange} from './tools/helpers/handleAppStateChange';

export type ThemeContextType = {
  theme: typeof LightTheme | typeof DarkTheme;
};
const defaultContextValue: ThemeContextType = {
  theme: LightTheme,
};
export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

export const Root: FC = () => {
  const deviceTheme = Appearance.getColorScheme() as ColorSchemeName;

  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    setTheme(deviceTheme === 'dark' ? DarkTheme : LightTheme);
    const themeChangeHandler = handleAppStateChange(setTheme);
    AppState.addEventListener('change', themeChangeHandler);
  }, [deviceTheme]);

  return (
    <ThemeContext.Provider value={{theme}}>
      <StripeProvider publishableKey="pk_test_51LqvmqD5XnzvldR6RsAYpuDt5vy80A1rQgbJ761mfiDNeeBy63ozqjS0GG5nOm5UAv9UKRQ6L83ZAs6H7Mm4gPyO00QfSszQoh">
        <ReduxProvider store={store}>
          <Navigation />
        </ReduxProvider>
      </StripeProvider>
    </ThemeContext.Provider>
  );
};
