import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabActions } from '@react-navigation/native'
import Home from './Home';
import Setting from './Setting';
import Search from './Search';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="home"
                size={30}
                style={{color: focused ? '#9C6DFF' : '#748c94'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="search"
                size={30}
                style={{color: focused ? '#9C6DFF' : '#748c94'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name="settings-outline"
                size={30}
                style={{color: focused ? '#9C6DFF' : '#748c94'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main

const styles = StyleSheet.create({})