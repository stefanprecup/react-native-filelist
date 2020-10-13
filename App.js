import 'react-native-gesture-handler';
import React from 'react';
import {HomeScreen} from './homescreen/HomeScreen';
import {ProfileScreen} from './profilescreen/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BotttomTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: '#e5e6e8'
      }
    }}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
          
      }} />
    </Tab.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BotttomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
