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
      color: theme.secondaryText,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.30)',
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
      color: theme.secondaryText,
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
      color: theme.secondaryText,
      fontWeight: '600',
    },
    error: {
      marginTop: 10,
      fontSize: 16,
      color: theme.secondaryText,
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
      color: theme.secondaryText,
      fontSize: 18,
      fontWeight: '700',
    },
    forgetContainer: {
      marginBottom: 50,
      marginTop: 30,
    },
    forgetText: {
      color: '#F3DEBA',
      fontSize: 16,
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
      color: theme.secondaryText,
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
      color: theme.secondaryText,
      paddingRight: 5,
      fontSize: 16,
    },
    signinText: {
      fontSize: 16,
      color: '#F3DEBA', // Replace with the actual sign in link color
    },
  });
};
