import {Dimensions, StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  return StyleSheet.create({
    list: {
      flexGrow: 0,
    },
    item: {
      backgroundColor: '#a8cba9',
      height: screenHeight / 2 - 40,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 30,
    },
    indicatorContainer: {
      position: 'absolute',
      flexDirection: 'row',
      top: screenHeight / 2 - 20,
      left: screenWidth / 3,
    },
    indicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'grey',
      marginHorizontal: 5,
    },
    activeIndicator: {
      backgroundColor: '#404F4C',
    },
    buttonCart: {
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: '#ABC4AA',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextCart: {
      color: theme.threeText,
      fontSize: 18,
      fontWeight: '700',
    },
  });
};
