import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

export default function New() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      initialRouteName="Selecione o prestador"
    >
      <Stack.Screen
        name="Selecione o prestador"
        component={SelectProvider}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Agendamentos');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        options={{
          title: 'Selecione o horário',
        }}
        component={SelectDateTime}
      />
      <Stack.Screen
        name="Confirm"
        options={{
          title: 'Confirmar agendamento',
        }}
        component={Confirm}
      />
    </Stack.Navigator>
  );
}
