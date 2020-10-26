import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {COLORS} from '../Styles.js';

export const DetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Name:' + item.name}</Text>
      <Text style={styles.text}>{'Imdb: ' + item.imdb}</Text>
      <Text style={styles.text}>{'Freeleech: ' + item.freeleech} </Text>
      <Text style={styles.text}>{'DoubleUp: ' + item.doubleup} </Text>
      <Text style={styles.text}>{'Upload date: ' + item.upload_date} </Text>

      <Text
        style={styles.text_link}
        onPress={() => Linking.openURL(item.download_link)}>
        {'Download link: ' + item.download_link}
      </Text>

      <Text style={styles.text}>{'Size: ' + item.size} : </Text>
      <Text style={styles.text}>{'Category: ' + item.category} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: COLORS.background_dark,
  },

  text: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
    color: COLORS.text_color,
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 18,
  },

  text_link: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
    color: COLORS.text_blue,
    textDecorationLine: 'underline',
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 18,
  },
});
