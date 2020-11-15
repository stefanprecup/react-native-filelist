import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenTabStack from './HomeScreenTabStack';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreenTabStack} />
    </Stack.Navigator>
  );
}