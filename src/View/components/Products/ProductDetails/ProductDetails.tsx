import React, {useContext, useRef, useState} from 'react';
import {
  Text,
  View,
  Animated,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../../../../index';
import {getStyles} from '../style';

export const ProductDetails = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [colorCircle, setColorCircle] = useState([
    {
      color: '#000000',
      id: 1,
    },
    {
      color: '#8E8E8E',
      id: 2,
    },
    {
      color: '#A9907E',
      id: 3,
    },
    {
      color: '#404F4C',
      id: 4,
    },
  ]);

  const flatListRef = useRef(null);
  const translateY = new Animated.Value(0);

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
  const renderIndicator = index => {
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
    const newColor = colorCircle.map(item => {
      if (item.id === element.id) {
        return {
          ...item,
          color: '#000000',
        };
      }
    });
    setColorCircle(newColor);
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

        <Animated.View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
            width: '100%',
            transform: [{translateY}],
            position: 'absolute',
            bottom: 0,
            height: Dimensions.get('window').height / 3 + 50,
            borderWidth: 1,
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              paddingHorizontal: 25,
              paddingTop: 25,
            }}
            onPress={hideModal}>
            <View style={{flexDirection: 'row'}}>
              <Text>Hide Modal</Text>
              <Text>Hide Modal</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24}}>Table and chair set</Text>
              <View style={{flexDirection: 'row'}}>
                {colorCircle.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        setColor(item);
                      }}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: item.color,
                      }}
                    />
                  );
                })}
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonCart}>
              <Text style={styles.buttonTextCart}>Add to cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
