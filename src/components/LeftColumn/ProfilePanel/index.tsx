import React from 'react';

import Panel from '../../Panel';
import Premium from '../Premium';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <>
      <Panel>
        <Container>
          <div className="profile-cover"></div>
          <img src="https://github.com/flubyGit.png" alt="Avatar" className="profile-picture" />
          <h1>Felipe André</h1>
          <h2>Desenvolvedor Júnior</h2>

          <div className="separator"></div>

          <div className="key-value">
            <span className="key">Quem viu seu perfil</span>
            <span className="value">{Math.floor(Math.random() * 400)}</span>
          </div>
          <div className="key-value">
            <span className="key">Viram sua publicação</span>
            <span className="value">{Math.floor(Math.random() * 400)}</span>
          </div>
        </Container>
      </Panel>
      <Panel>
        <Premium />
      </Panel>
    </>
  );
};

export default ProfilePanel;
