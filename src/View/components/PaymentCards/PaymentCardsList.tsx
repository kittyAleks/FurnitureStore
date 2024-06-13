import React, {FC, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ThemeContext} from '../../../index';
import {getStyles} from '../../screens/Payment/style';

type PaymentCardsListProps = {
  item: {
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
  };
};

export const PaymentCardsList: FC<PaymentCardsListProps> = ({item}) => {
  const {brand, last4, expMonth, expYear} = item;
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <LinearGradient
      colors={['#00B4DB', '#0083B0']}
      style={styles.card}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.iconRow}>
        <Ionicons name="toggle" size={20} color="#FFF" />
        <Ionicons name="toggle-outline" size={20} color="#FFF" />
      </View>
      <Text style={styles.cardName}>{brand}</Text>
      <Text style={styles.cardDetails}>{`**** **** **** ${last4}`}</Text>
      <Text style={styles.cardDetails}>{`${expMonth}/${expYear
        .toString()
        .slice(-2)}`}</Text>
    </LinearGradient>
  );
};
