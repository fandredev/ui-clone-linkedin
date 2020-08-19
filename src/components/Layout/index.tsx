import React, { useEffect } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';

import { Container } from './styles';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/shimmer/action';

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.shimmer.isLoading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.HideShimmer(false));
    }, 1000);
  });
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};
export default Layout;
