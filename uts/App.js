import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Feed from './component/Feed';
import Pesanan from './component/Pesanan';
import Pembatalan from './component/Pembatalan';
import Lainnya from './component/Lainnya';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#00579C',
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
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          headerShown: false,
          tabBarLabel: 'Pembatalan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          headerShown: false,
          tabBarLabel: 'Lainnya',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="align-justify" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
