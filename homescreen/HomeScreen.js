import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {COLORS} from '../Styles.js';
import {getImage} from '../homescreen/HomeScreenImageUtils';
import {SearchBar} from 'react-native-elements';

export const Home = ({navigation}) => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const API_ENDPOINT =
    'https://filelist.io/api.php?username=mertzzz&passkey=6b7178d18dca405246d7a8d90d7996c3&action=latest-torrents';

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setFilteredDataSource(resJson);
        setData(data.concat(resJson));
      })
      .catch((err) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  const searchBarView = () => {
    return (
      <SearchBar
        lightTheme
        round
        searchIcon={{size: 24}}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Type Here..."
        value={search}
      />
    );
  };

  const flatListView = () => {
    return (
      <FlatList
        style={styles.container}
        data={filteredDataSource}
        keyExtractor={(item) => item.id.toString()}
        renderItem={flatListItemView}
      />
    );
  };

  const flatListItemView = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            item: item
          });
        }}>
        <View style={styles.row}>
          <View style={styles.row_cell}>
            <Text style={styles.row_time}>{item.upload_date}</Text>
            <Text numberOfLines={2} style={styles.row_name}>
              {item.name}
            </Text>
          </View>
          {getImage(item.category)}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      {searchBarView()}
      {flatListView()}
    </>
  );
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
});
