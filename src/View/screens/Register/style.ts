import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingTop: 50,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.primaryText,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background.six,
      borderRadius: 9,
      paddingVertical: 14,
      paddingHorizontal: 13,
    },
    iconStyle: {
      marginRight: 10,
      color: '#FFF',
      width: 20,
      height: 20,
    },
    inputStyle: {
      flex: 1,
      fontSize: 16,
      color: theme.primaryText,
    },
    error: {
      marginTop: 10,
      fontSize: 16,
      color: theme.primaryText,
    },
    checkboxContainer: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 30,
    },
    checkbox: {
      marginRight: 8,
      width: 20,
      height: 20,
      borderWidth: 3,
      borderColor: '#ABC4AA',
    },
    checkboxLabel: {
      fontSize: 16,
      color: theme.primaryText,
      fontWeight: '600',
    },
    button: {
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: '#ABC4AA',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: theme.primaryText,
      fontSize: 18,
      fontWeight: '700',
    },
    containerСontinue: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.50)',
    },
    text: {
      marginHorizontal: 10,
      color: theme.primaryText,
      fontSize: 16,
    },
    socialMediaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    icon: {
      width: 40,
      height: 40,
    },
    footer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 10,
    },
    footerText: {
      color: theme.primaryText,
      paddingRight: 5,
      fontSize: 16,
    },
    signinText: {
      fontSize: 16,
      color: '#F3DEBA', // Replace with the actual sign in link color
    },
  });
};
