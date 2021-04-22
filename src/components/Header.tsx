import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';

import userImg from '../assets/profile.jpeg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Viviane</Text>
      </View>

      <Image style={styles.image} source={userImg} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 40
  }
});
