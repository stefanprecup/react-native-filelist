import React from 'react';
import {View, Text} from 'react-native';

export const DetailScreen = ({route}) => {
  /* 2. Get the param */
  const {item} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>item: {JSON.stringify(item)}</Text>
    </View>
  );
};
