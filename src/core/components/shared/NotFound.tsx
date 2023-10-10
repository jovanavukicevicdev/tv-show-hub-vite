import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';

const NotFound = () => {
  return (
    <PageContainer>
      <StyledHeading>404</StyledHeading>
      <StyledMessage>Sorry, we can't find that page.</StyledMessage>
      <BackButton to="/shows">Go to Homepage</BackButton>
    </PageContainer>
  );
};

export default NotFound;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  &:hover {
    border: 1px solid #4185f4;
    background-color: #4185f4;
    color: ${getColor('primaryContrast')};
  }
`;
