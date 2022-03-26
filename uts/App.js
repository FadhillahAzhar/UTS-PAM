import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import Feed from './component/Feed';
import Pesanan from './component/Pesanan';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          headerShown: false,
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
