import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ThemeContext} from '../../../../index';
import {getStyles} from '../style';
import {ProductDetailsRouteProp} from '../../../navigation/types';
import {useLikedProduct} from '../../../../bus/likedProduct';

type ProductDetailsProps = {
  route: ProductDetailsRouteProp;
};
const {height} = Dimensions.get('window');

export const ProductDetails: FC<ProductDetailsProps> = ({route}) => {
  const [liked, setLiked] = useState(false);
  const {likedProduct, unLikedProduct} = useLikedProduct();

  const {item} = route.params;
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const [activeIndex, setActiveIndex] = useState(0);
  const [colorCircle, setColorCircle] = useState([
    {
      color: '#000000',
      id: 1,
      borderColor: '#000000',
      borderWidth: 2,
    },
    {
      color: '#8E8E8E',
      id: 2,
      borderColor: '#8E8E8E',
      borderWidth: 2,
    },
    {
      borderWidth: 2,
      color: '#A9907E',
      id: 3,
      borderColor: '#A9907E',
    },
    {
      borderWidth: 2,
      borderColor: '#404F4C',
      color: '#404F4C',
      id: 4,
    },
  ]);

  const flatListRef = useRef(null);
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const fetchLikedStatus = async () => {
      const res = await AsyncStorage.getItem('liked');
      if (res !== null) {
        setLiked(JSON.parse(res));
      }
    };

    fetchLikedStatus();
  }, []);

  const likeProduct = (id: string) => {
    likedProduct(id);
  };
  const unlikeProduct = (id: string) => {
    unLikedProduct(id);
  };

  const showModal = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const hideModal = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const updateActiveIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(
      contentOffsetX / Dimensions.get('window').width,
    );
    setActiveIndex(newIndex);
  };
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
  const renderIndicator = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.indicator,
          activeIndex === index
            ? styles.activeIndicator
            : {backgroundColor: '#FFFFFF7F'},
        ]}
      />
    );
  };
  const setColor = (element: any) => {
    setColorCircle(
      colorCircle.map(item => {
        if (item.id === element.id) {
          return {
            ...item,
            borderWidth: 3,
            borderColor: item.color,
          };
        }
        return {
          ...item,
          borderWidth: 0,
          borderColor: 'transparent',
        };
      }),
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <FlatList
        ref={flatListRef}
        data={[...new Array(6).keys()]}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={updateActiveIndex}
        style={styles.list}
      />
      <View style={styles.indicatorContainer}>
        {[...new Array(6).keys()].map((_, index) => renderIndicator(index))}
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <Animated.ScrollView
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
            width: '100%',
            transform: [{translateY}],
            position: 'absolute',
            bottom: 0,
            top: 50,
            height: height / 2,
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              paddingHorizontal: 25,
              paddingTop: 25,
              marginBottom: 180,
            }}
            onPress={hideModal}>
            <View style={{flexDirection: 'row'}}>
              <Text>Hide Modal</Text>
              <Text>Hide Modal</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 24}}>{item.title}</Text>
                <TouchableOpacity
                  style={{paddingLeft: 40}}
                  onPress={async () => {
                    const newLikedStatus = !liked;
                    console.log('newLikedStatus', newLikedStatus);
                    await AsyncStorage.setItem(
                      'liked',
                      JSON.stringify(newLikedStatus),
                    );
                    setLiked(newLikedStatus);
                    const productId = item._id.toString();
                    if (newLikedStatus) {
                      likeProduct(productId);
                    } else {
                      unlikeProduct(productId);
                    }
                  }}>
                  <Ionicons
                    name={liked ? 'heart' : 'heart-outline'}
                    size={25}
                    color={'red'}
                  />
                </TouchableOpacity>
                <Text style={{fontSize: 24, color: 'green'}}>
                  $ {item.price}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                {colorCircle.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        setColor(item);
                      }}
                      style={{
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: item.color,
                      }}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          borderColor: item.borderColor,
                          borderWidth: item.borderWidth,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>

              <Text>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.buttonCart}>
              <Text style={styles.buttonTextCart}>Add to cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};
