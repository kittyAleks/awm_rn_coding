import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity, Linking, View} from 'react-native';
import {styles} from '../../screens/style.ts';

type SocialLinksProps = {
  instagram: string;
  linkedIn: string;
  website: string;
  additionalCount: number;
};
export const SocialLinks: FC<SocialLinksProps> = ({
  instagram,
  linkedIn,
  website,
  additionalCount,
}) => {
  // Функция для открытия URL в браузере устройства
  const openURL = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={styles.containerSocial}>
      <Ionicons
        name={'link-outline'}
        color={'black'}
        size={20}
        style={styles.icon}
      />
      <TouchableOpacity onPress={() => openURL(instagram)}>
        <Text style={styles.linkText}>Instagram,</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openURL(linkedIn)}>
        <Text style={styles.linkText}>Linkedin,</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openURL(website)}>
        <Text style={styles.linkText}>visitphuket.com</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>+{additionalCount}</Text>
    </View>
  );
};
