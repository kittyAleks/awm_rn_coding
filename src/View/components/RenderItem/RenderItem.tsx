import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 24 * 2 - 20) / 2;
const IMAGE_HEIGHT = 207;

type RenderItemType = {
  item: {
    id: string;
    title: string;
    type: string;
    rating: number | null;
    reviews: number | null;
    duration: string;
    image: any;
  };
  isLiked?: any;
  setIsLiked?: any;
};

export const renderItem: FC<RenderItemType> = ({item, isLiked, setIsLiked}) => {
  const toggleLike = (id: string) => {
    setIsLiked(currentLikes => ({
      ...currentLikes,
      [id]: !currentLikes[id],
    }));
  };
  return (
    <View style={[styles.card]}>
      <Image
        source={item.image}
        style={[styles.image, {width: CARD_WIDTH, height: IMAGE_HEIGHT}]}
      />
      <TouchableOpacity
        onPress={() => toggleLike(item.id)}
        style={styles.heartIcon}>
        <Ionicons
          name={isLiked[item.id] ? 'heart' : 'heart-outline'}
          size={20}
          color={isLiked[item.id] ? 'green' : 'white'}
        />
      </TouchableOpacity>
      <View style={[styles.infoContainer, {width: CARD_WIDTH}]}>
        <View style={styles.details}>
          {item.rating && (
            <>
              <Ionicons name="star" size={14} color="black" />
              <Text>
                {item.rating} ({item.reviews})
              </Text>
            </>
          )}
          <Text>{item.duration}</Text>
        </View>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
  image: {
    borderRadius: 12,
  },
  infoContainer: {
    marginBottom: 30,
    padding: 8,
  },

  title: {
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    // backgroundColor: 'white',
    // borderRadius: 50,
    padding: 5,
  },
});
