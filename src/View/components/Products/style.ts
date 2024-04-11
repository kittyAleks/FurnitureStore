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

    // ProductDetails
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
      marginTop: 100,
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
    // LikedProductCard
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 3, // for Android
      shadowOffset: {width: 1, height: 1}, // for iOS
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginVertical: 10,
      marginHorizontal: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 150,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    price: {
      fontSize: 14,
      marginBottom: 10,
    },
  });
};
