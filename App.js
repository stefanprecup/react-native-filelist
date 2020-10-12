import React, {useState, useEffect} from 'react';
import {View, FlatList, Image,StyleSheet, Text} from 'react-native';
import {COLORS} from './Styles.js';
// import {getImage} from './ImageUtils';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const API_ENDPOINT =
    'https://filelist.io/api.php?username=mertzzz&passkey=6b7178d18dca405246d7a8d90d7996c3&action=latest-torrents';

  useEffect(() => {
    setIsLoading(true);
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(data.concat(resJson));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <>
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

  function HomeScreen() {
    return (
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.row_cell}>
              <Text style={styles.row_time}>{item.upload_date}</Text>
              <Text numberOfLines={2} style={styles.row_name}>
                {item.name}
              </Text>
            </View>
            {getImage(item.category)}
          </View>
        )}
      />
    );
  }
};

var getImage = (category) => {
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
  container: {
    padding: 8,
    flexDirection: 'column',
    backgroundColor: COLORS.background_dark,
    alignSelf: 'stretch',
  },
  row: {
    marginTop: 10,
    elevation: 1,
    borderRadius: 2,
    backgroundColor: COLORS.secondary,
    flex: 1,
    flexDirection: 'row',
  },
  row_cell: {
    flex: 1,
    flexDirection: 'column',
  },
  row_time: {
    paddingTop: 5,
    paddingLeft: 5,
    color: COLORS.text_light,
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    flex: 0,
    fontSize: 12,
  },
  row_name: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
    color: COLORS.text_light,
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 18,
  },
  row_image: {
    width: 50,
    height: 50,
    paddingRight: 10,
    marginRight: 10,
    flex: 0,
    alignSelf: 'center',
  },
});

export default App;
