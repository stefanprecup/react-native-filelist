import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AuthContext} from './AuthProvider';

import {Home} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const DetailStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function HomeScreenTabStack() {
  const {user, logout} = useContext(AuthContext);
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
    <DetailStack.Navigator>
      <DetailStack.Screen name="Home" component={Home} />
      <DetailStack.Screen
        name={'Details'}
        component={DetailScreen}
        options={{title: 'Torrent detail'}}
      />
    </DetailStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
