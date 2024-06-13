import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F1F6',
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      margin: 20,
    },
    card: {
      borderRadius: 10,
      padding: 20,
      marginHorizontal: 15,
      marginBottom: 10,
      width: '95%',
    },
    iconRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    cardName: {
      fontSize: 16,
      color: '#FFF',
    },
    cardDetails: {
      color: '#FFF',
      marginTop: 5,
    },
    button: {
      backgroundColor: '#007AFF',
      borderRadius: 20,
      padding: 15,
      margin: 20,
      alignItems: 'center',
      opacity: 0.8,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
