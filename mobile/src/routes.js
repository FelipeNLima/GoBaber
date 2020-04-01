import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import New from '~/Routes/New';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </>
  ) : (
    <>
      <Tab.Navigator
        tabBarOptions={{
          unmountOnBlur: true,
          activeTintColor: '#FFF',
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: '#8d41a8',
          },
          labelStyle: {
            fontWeight: 'bold',
          },
        }}
        headerMode="none"
      >
        <Tab.Screen
          resetOnBlur="true"
          name="Agendamentos"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="event" size={size} color={color} />
            ),
          }}
          component={Dashboard}
        />
        <Tab.Screen
          resetOnBlur="true"
          name="Agendar"
          options={{
            tabBarVisible: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="add-circle-outline" size={size} color={color} />
            ),
          }}
          component={New}
        />

        <Tab.Screen
          resetOnBlur="true"
          name="Meu perfil"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
