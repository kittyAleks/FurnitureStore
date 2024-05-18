import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
    },
    card: {
      flexDirection: 'row',
      marginBottom: 10,
      width: '100%',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 5,
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
      color: '#333333',
    },
    description: {
      fontSize: 14,
      color: '#757575',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#27AE60',
    },
    button: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#28A745',
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      height: 10,
    },
    // LikedProducts
    likedCard: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginVertical: 8,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderWidth: 1,
      paddingHorizontal: 5,
    },
    likedImage: {
      width: 150,
      height: 148,
      backgroundColor: '#f0f0f0',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    likedInfoContainer: {
      flex: 1,
      width: '100%',
      height: 72,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    likedTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333',
    },
    likedPrice: {
      fontSize: 16,
      color: '#666',
      marginTop: 4,
    },
    heartIcon: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
  });
};
