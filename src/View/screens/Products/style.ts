import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
    },
    card: {
      flexDirection: 'row',
      width: '100%',
      padding: 10,
      backgroundColor: '#f4f4f4',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#28A745', // или другой цвет из вашей палитры
    },
    button: {
      // Стили для кнопки
    },
    separator: {
      height: 10,
    },
  });
};
