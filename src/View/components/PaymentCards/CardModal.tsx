import React, {FC, useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Pressable,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';
import {usePanGesture} from '../../../tools/hooks';
import {CardField, createToken} from '@stripe/stripe-react-native';

type AddCardModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onAddCard: (token: any) => void;
};

const {height} = Dimensions.get('window');

export const AddCardModal: FC<AddCardModalProps> = ({
  isVisible,
  setIsVisible,
  onAddCard,
}) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [name, setName] = useState('');

  const handleAddCard = async () => {
    if (cardDetails) {
      const {token} = await createToken({
        type: 'Card',
        name,
      });

      if (token) {
        onAddCard(token);
        setIsVisible(false);
        setName('');
      } else {
        console.error('Error creating token');
      }
    }
  };
  const translateY = useSharedValue(height);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(height * 0.5, {duration: 500});
    } else {
      translateY.value = withTiming(height, {duration: 500});
    }
  }, [isVisible]);
  const panGesture = usePanGesture({height, setIsVisible, translateY});

  return (
    <View style={styles.overlay}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.modal, animatedStyle]}>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Name on Card"
              value={name}
              onChangeText={setName}
            />
            <CardField
              postalCodeEnabled={false}
              placeholders={{
                number: '4242 4242 4242 4242',
              }}
              cardStyle={{
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                borderWidth: 1,
              }}
              style={{
                width: '100%',
                height: 50,
                marginVertical: 30,
              }}
              onCardChange={(card: any) => {
                setCardDetails(card);
              }}
            />
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : '#007AFF',
                },
                styles.buttonAddNow,
              ]}
              onPress={handleAddCard}>
              <Text style={styles.text}>Add Now</Text>
            </Pressable>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  buttonAddNow: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
