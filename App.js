import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {COLORS} from './Styles.js';
import {getImage} from './ImageUtils';


const App: () => React$Node = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://filelist.io/api.php?username=mertzzz&passkey=6b7178d18dca405246d7a8d90d7996c3&action=latest-torrents',
    )
      .then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson));
      });
  });

  return (
      <View style={styles.v_container}>
        <FlatList
          style={styles.container}
          data={data}
          keyExtractor={(item, index) => index}
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
      </View>
  );
};

const styles = StyleSheet.create({
  v_container: {
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.background_dark,
  },
  container: {
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

export default App;
