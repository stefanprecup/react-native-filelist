import React from 'react';
import {View, Text, Button} from 'react-native';

export const DetailScreen = ({route, navigation}) =>{
    /* 2. Get the param */
    const {item} = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>item: {JSON.stringify(item)}</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }