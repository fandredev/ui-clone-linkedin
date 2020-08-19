import React from 'react';
import { Container } from './styled';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

const LoadingProfilePanel: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="avatar-skeleton" />
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </Container>
  );
};
export default LoadingProfilePanel;
