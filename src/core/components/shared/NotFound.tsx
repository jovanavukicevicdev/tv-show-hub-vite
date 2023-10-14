import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';
import Header from './Header.tsx';
import { getVar } from '../../theme/ui-variables/ui-variables.ts';

const NotFound = () => {
  return (
    <>
      <Header />
      <MainContent>
        <StyledHeading>404</StyledHeading>
        <StyledMessage>Sorry, we can't find that page.</StyledMessage>
        <BackButton to="/shows">Go to Homepage</BackButton>
      </MainContent>
    </>
  );
};

export default NotFound;

const MainContent = styled.div`
  width: 100%;
  min-height: calc(100% - ${getVar('headerHeight')});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getColor('background')};
`;

const StyledHeading = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  font-size: 6rem;
`;

const StyledMessage = styled.p`
  letter-spacing: 1px;
  margin: 0;
`;

const BackButton = styled(Link)`
  padding: 4px 12px;
  border: 1px solid ${getColor('primary')};
  background-color: ${getColor('primary')};
  color: ${getColor('primaryContrast')};
  border-radius: 6px;
  margin-top: 20px;
  font-weight: 600;
`;
