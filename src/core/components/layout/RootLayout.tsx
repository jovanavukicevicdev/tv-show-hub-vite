import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { getVar } from '../../theme/ui-variables/ui-variables';
import Footer from '../shared/Footer';
import Breadcrumbs from '../shared/Breadcrumbs.tsx';

const RootLayout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Breadcrumbs />
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default RootLayout;

const MainContent = styled.main`
  min-height: calc(100% - ${getVar('headerHeight')} - ${getVar('footerHeight')});
  padding: ${getVar('mobilePadding')};

  @media (min-width: 600px) {
    padding: ${getVar('desktopPadding')};
  }
`;
