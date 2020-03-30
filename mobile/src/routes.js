import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

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
          activeTintColor: '#7159c1',
          inactiveTintColor: '#999',
          labelStyle: {
            fontWeight: 'bold',
          },
        }}
        headerMode="none"
      >
        <Tab.Screen
          name="Dashboard"
          options={{
            tabBarIcon: ({ color, size }) => (
              
            ),
          }}
          component={Dashboard}
        />
      </Tab.Navigator>
    </>
  );
}
