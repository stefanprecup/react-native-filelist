import {Image, StyleSheet} from 'react-native';
import React from 'react';

export var getImage = (category) => {
  switch (category) {
    case 'Filme 4K Blu-Ray':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/4kBD.png')}
        />
      );
    case 'Jocuri PC':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/games.png')}
        />
      );
    case 'Filme HD':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/hd.png')}
        />
      );
    case 'Audio':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/music.png')}
        />
      );
    case 'Filme Blu-Ray':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/bluray.png')}
        />
      );
    case 'Anime':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/anime.png')}
        />
      );
    case 'Seriale HD':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/hdtv.png')}
        />
      );
    case 'Sport':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/sport.png')}
        />
      );
    case 'Docs':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/docs.png')}
        />
      );
    case 'Videoclip':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/vids.png')}
        />
      );
    case 'FLAC':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/flac.png')}
        />
      );
    case 'Programe':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/apps.png')}
        />
      );
    case 'Filme HD-RO':
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/hd-ro.png')}
        />
      );
    default:
      return (
        <Image
          style={styles.row_image}
          source={require('./assets/icon.png')}
        />
      );
  }
};

const styles = StyleSheet.create({
  row_image: {
    width: 50,
    height: 50,
    paddingRight: 10,
    marginRight: 10,
    flex: 0,
    alignSelf: 'center',
  },
});
