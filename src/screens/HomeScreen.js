import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import {StyleSheet } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

import {Home} from '../../homescreen/HomeScreen'
import {ProfileScreen} from '../screens/ProfileScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';

const TorrentsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
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
            component={HomeStackContainer}
            options={{title: 'Torrents'}}
          />
          <Tab.Screen
            name={'Profile'}
            component={ProfileStackScreen}
            options={{title: 'Profile'}}
          />
        </Tab.Navigator>
    </>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log("route name " + routeName);
  switch (routeName) {
    case 'Home':
      return 'Torrents';
    case 'Details':
      return 'Torrent detail';
  }
}

function setBackButton(navigation, route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log("back button route name " + routeName);
  switch (routeName) {
    case 'Home':
      return null;
    case 'Details':
      return (
        <HeaderBackButton
          onPress={() => navigation.navigate('Home')}
          title="Info"
          color="#fff"></HeaderBackButton>
      );
  }
}

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

function HomeStackContainer() {
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

function HomeScreenStack({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => setBackButton(navigation, route),
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen name="Home" component={Home} />
      <DetailStack.Screen
        name={'Details'}
        component={DetailScreen}
        options={{title: 'Torrent detail', headerLeft: null}}
      />
    </DetailStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});