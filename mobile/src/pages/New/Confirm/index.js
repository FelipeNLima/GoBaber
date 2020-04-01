import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useRoute, useNavigation } from '@react-navigation/native';
import Background from '~/components/Background';

import api from '~/services/api';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm() {
  const route = useRoute();
  const navigation = useNavigation();

  const { providers, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: providers.id,
      date: time,
    });

    navigation.navigate('Agendamentos');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: providers.avatar
              ? providers.avatar.url
              : `https://api.adorable.io/avatar/50/${providers.name}.png`,
          }}
        />

        <Name>{providers.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
