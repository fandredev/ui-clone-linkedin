import React from 'react';

import TrendingPanel from './TrendingPanel';
import LoadingThrendingPannel from '../Shimmer/LoadingThrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingThrendingPannel />
      ) : (
        <>
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
