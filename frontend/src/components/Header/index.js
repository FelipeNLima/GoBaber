import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  function Avatar() {
    if (profile.avatar.url === null) {
      return 'https://api.adorable.io/avatars/50/abott@adorable.png';
    }
    return profile.avatar.url;
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobaber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={Avatar()} alt="user" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
