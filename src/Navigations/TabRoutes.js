import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile, Explore} from '../Screens';

import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#990023',
        tabBarInactiveTintColor: '#441122',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: 50,
          marginBottom: 10,
          marginHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? 'yellow' : 'purple',
                }}
                source={imagePath.icInfo}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 30, width: 30}}
                source={imagePath.icNotification}
              />
            );
          },
        }}
        name={navigationStrings.PROFILE}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 30, width: 30}}
                source={imagePath.icGetMore}
              />
            );
          },
        }}
        name={navigationStrings.EXPLORE}
        component={Explore}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

const styles = StyleSheet.create({});
