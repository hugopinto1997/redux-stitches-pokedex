import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import {
  Container,
  ContentContainer,
  MainContainer,
} from './BasicLayout.styles';

const BasicLayout = () => {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default BasicLayout;
