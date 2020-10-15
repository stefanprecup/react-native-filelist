import 'react-native-gesture-handler';
import React from 'react';
import {Home} from './homescreen/HomeScreen';
import {ProfileScreen} from './profilescreen/ProfileScreen';
import {DetailScreen} from './detailscreen/DetailScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TorrentsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </ProfileStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <TorrentsStack.Navigator>
      <TorrentsStack.Screen
        name={'Torrents'}
        component={HomeScreenStack}
        options={{title: 'Torrents'}}
      />
    </TorrentsStack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen name="Home" component={Home} />
      <DetailStack.Screen name="Details" component={DetailScreen} />
    </DetailStack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
            style: {
              backgroundColor: '#e5e6e8',
            },
          }}>
          <Tab.Screen
            name={'Torrents'}
            component={HomeStackScreen}
            options={{title: 'Torrents'}}
          />
          <Tab.Screen
            name={'Profile'}
            component={ProfileStackScreen}
            options={{title: 'Profile'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
