import React from 'react';

import Panel from '../../Panel';

import { Container, HashtagIcon } from './styles';

const tags = ['rocketseat', 'next-level', 'node', 'react', 'developer'];
const groups = ['Front-End Developer', 'React.JS Devs', 'Rocketseat', 'jasmine', 'tdd-brasil'];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hashtags seguidas</span>

        {tags.map((item) => (
          <span key={item} className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
        <span className="groups">Grupos</span>

        {groups.map((item) => (
          <span key={item} className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
