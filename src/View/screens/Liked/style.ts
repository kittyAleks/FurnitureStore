import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    quantity: {
      marginTop: 100,
      fontWeight: 'bold',
      fontSize: 18,
    },
    mainText: {
      marginTop: 100,
      fontWeight: '700',
      fontSize: 18,
    },
    secondText: {
      fontSize: 14,
      textAlign: 'center',
    },
  });
};
