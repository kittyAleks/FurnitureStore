import React, {FC, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ThemeContext} from '../../../index';

type CustomHeaderProps = {
  title: string;
  navigation: {canGoBack: () => boolean; goBack: () => void};
};

const CustomHeader: FC<CustomHeaderProps> = ({title, navigation}) => {
  console.log('CustomHeader', title, navigation);
  const {theme} = useContext(ThemeContext);
  const back = navigation.canGoBack();
  console.log('back', back);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.one,
      }}>
      <View style={styles.headerContainer}>
        {back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title || 'Default Title'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 54,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    width: 54,
    height: 54,
    backgroundColor: '#F4F8FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backArrow: {
    fontSize: 24,
  },
});

export default CustomHeader;
