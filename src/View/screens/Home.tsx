import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MainStackScreenProps} from '../navigation/types.ts';

import {styles} from './style.ts';
import {SocialLinks} from '../components/SocialLinks/SocialLinks.tsx';
import {renderItem} from '../components/RenderItem/RenderItem.tsx';
const data = [
  {
    id: '1',
    title: 'Alla scoperta dei produttori di vino altoatesini in ebike',
    type: 'Business',
    rating: 3.88,
    reviews: 17,
    duration: '3 Days',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '2',
    title: 'Weekend ride',
    type: 'New',
    rating: 4,
    reviews: 2,
    duration: '5 hours',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '3',
    title: 'Weekend ride',
    type: 'New',
    rating: 5,
    reviews: 44,
    duration: '5 hours',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '4',
    title: 'Weekend ride',
    type: 'New',
    rating: 5,
    reviews: 11,
    duration: '5 hours',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '5',
    title: 'Weekend ride',
    type: 'New',
    rating: 5,
    reviews: 12,
    duration: '5 hours',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '6',
    title: 'Weekend ride',
    type: 'New',
    rating: null,
    reviews: null,
    duration: '5 hours',
    image: require('../../assets/images/image1.png'),
  },
];

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 24 * 2 - 24) / 2;
export const Home: FC<MainStackScreenProps> = () => {
  const [isLiked, setIsLiked] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorPosition = useRef(new Animated.Value(0)).current;
  const navigationState = ['Listed', 'Booked', 'Wishlisted'];

  useEffect(() => {
    Animated.spring(indicatorPosition, {
      toValue: activeIndex * (100 / navigationState.length),
      useNativeDriver: false,
    }).start();
  }, [activeIndex, navigationState.length]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#BDFF31', 'rgba(255, 255, 255, 0)']}
        style={styles.linearGradient}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name={'arrow-back'} color={'black'} size={20} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.button}>
            <Ionicons name={'ellipsis-horizontal'} color={'black'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.name}>Kate Jamezi-Liamson</Text>
          <View style={styles.ratingSection}>
            <Ionicons name={'star'} color={'black'} size={20} />
            <Text style={[styles.rating, {textDecorationLine: 'underline'}]}>
              4.98
            </Text>
            <Text style={[styles.rating, {textDecorationLine: 'underline'}]}>
              (402 reviews)
            </Text>
          </View>
          <View style={styles.ratingSection}>
            <Text style={styles.rating}>555 followers </Text>
            <Text style={styles.rating}>113 following</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Message</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.textExperience}>
          <Text style={{fontSize: 15}}>
            I am an Experience Designer with a deep passion for travel around
            the world, cars, trains, snowboarding and luxury yachts
          </Text>
        </View>
        <View style={styles.info}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#D2D2D7',
              marginBottom: 30,
            }}
          />
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Ionicons name={'time'} color={'black'} size={20} />
            <Text style={{fontSize: 17, fontWeight: '500', paddingLeft: 10}}>
              AWM host since 2023
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Ionicons name={'text'} color={'black'} size={20} />
            <Text style={{fontSize: 17, fontWeight: '500', paddingLeft: 10}}>
              Speaks English, German, French
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Ionicons
              name={'phone-portrait-outline'}
              color={'black'}
              size={20}
            />
            <Text style={{fontSize: 17, fontWeight: '500', paddingLeft: 10}}>
              Phone number verified
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Ionicons name={'mail-outline'} color={'black'} size={20} />
            <Text style={{fontSize: 17, fontWeight: '500', paddingLeft: 10}}>
              Email verified
            </Text>
          </View>
          <SocialLinks
            instagram="https://www.instagram.com"
            linkedIn="https://www.linkedin.com"
            website="https://visitphuket.com"
            additionalCount={5}
          />
          <Text style={{fontSize: 20, fontWeight: '600', paddingTop: 30}}>
            Kate’s Adventures
          </Text>
        </View>
        <View style={styles.containerTab}>
          {navigationState.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, activeIndex === index && styles.activeTab]}
              onPress={() => setActiveIndex(index)}>
              <Text
                style={[
                  styles.tabText,
                  activeIndex === index && styles.activeTabText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <Animated.View
            style={[
              styles.indicator,
              {
                width: '20%',
                left: indicatorPosition.interpolate({
                  inputRange: [0, 100],
                  outputRange: [
                    `${(33.3 - 20) / 2}%`,
                    `${100 - (33.3 - 20) / 2}%`,
                  ],
                }),
              },
            ]}
          />
        </View>
        <Text style={{marginLeft: 20, marginVertical: 20}}>December</Text>
        <FlatList
          snapToInterval={CARD_WIDTH + 24} //Ширина карточки плюс отступ между ними
          snapToAlignment={'start'}
          decelerationRate="fast"
          horizontal={true}
          data={data}
          renderItem={({item}) => renderItem({item, isLiked, setIsLiked})}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 24}}
          ItemSeparatorComponent={() => <View style={{width: 24}} />}
        />
      </ScrollView>
    </View>
  );
};
