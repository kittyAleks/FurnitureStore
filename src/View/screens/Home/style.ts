import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    headerText: {
      color: theme.primaryText,
      fontSize: 43.94,
      fontWeight: '400',
      fontStyle: 'italic',
    },
    subHeaderText: {
      color: theme.primaryText,
      fontSize: 43.94,
      // fontFamily: 'Montserrat',
      fontStyle: 'italic',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: 353,
      alignItems: 'flex-end',
    },
    descriptionText: {
      fontSize: 28,
      color: theme.primaryText,
      width: 225,
    },
    button: {
      backgroundColor: '#ABC4AA',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      width: 50,
      height: 50,
    },
    buttonText: {
      fontSize: 24,
      color: theme.secondaryText,
    },
  });
};
