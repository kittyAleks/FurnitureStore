import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {getStyles} from './style';
import {ThemeContext} from '../../../index';

import {PaymentCardsList} from '../../components/PaymentCards/PaymentCardsList';
import {AddCardModal} from '../../components/PaymentCards/CardModal';
import {useCards} from '../../../bus/cards';

type tokenT = {
  id: number;
  card: cardT;
};
type cardT = {
  id: number;
  name: string;
  number: number;
  last4: number;
  expMonth: number;
  expYear: string;
  brand: string;
};
export const PaymentScreen = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const {addCard, getAllCards, cards} = useCards();
  const {loading} = cards;
  const [userCards, setUserCards] = useState(cards);
  const [isVisible, setIsVisible] = useState(false);

  const fetchCards = () => {
    getAllCards();
  };
  useEffect(() => {
    fetchCards();
  }, []);

  const handleAddCard = (token: tokenT) => {
    setUserCards(userCards);
    const dataCard = {
      token: token.id,
      last4: token.card.last4,
      expMonth: token.card.expMonth,
      expYear: token.card.expYear,
      brand: token.card?.brand,
    };
    addCard(dataCard);
    alert('Card added successfully');
    fetchCards();
    setIsVisible(false);
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={cards.cards}
          keyExtractor={item => item.token.toString()}
          renderItem={({item}) => {
            return <PaymentCardsList item={item} />;
          }}
          ListHeaderComponent={() => (
            <Text style={styles.header}>My Cards</Text>
          )}
        />
      )}
      <View>
        <TouchableOpacity onPress={toggleModal} style={styles.button}>
          <Text style={styles.buttonText}>Add New Card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <AddCardModal
          onAddCard={handleAddCard}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </View>
    </SafeAreaView>
  );
};
