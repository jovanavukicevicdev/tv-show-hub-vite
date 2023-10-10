import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';
import { getVar } from '../../theme/ui-variables/ui-variables';
import { Link } from 'react-router-dom';
import TvMazeLogo from '../../../assets/images/tvm_api.png';

const TV_MAZE_API_URL = 'https://www.tvmaze.com/api';

const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <Link to="/shows">
          <Logo>TvShowsHub</Logo>
        </Link>

        <PoweredByWrapper>
          <PoweredBy>Powered by</PoweredBy>
          <StyledLink href={TV_MAZE_API_URL} target="_blank" rel="noopener norefferer">
            <StyledTvMazeLogo src={TvMazeLogo} alt="TVmaze API logo" />
          </StyledLink>
        </PoweredByWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${getVar('headerHeight')};
  padding: 20px 16px;

  @media (min-width: 580px) {
    padding: 20px 48px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
`;

const Logo = styled.div`
  color: ${getColor('primary')};
  font-size: 30px;
  letter-spacing: -3px;
  line-height: 1;
  font-weight: bold;
  user-select: none;
  text-align: center;

  @media (min-width: 580px) {
    margin-bottom: 0;
  }
`;

const PoweredByWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

const StyledLink = styled.a`
  height: 22px;

  @media (min-width: 580px) {
    height: 30px;
  }
`;

const StyledTvMazeLogo = styled.img`
  height: 24px;

  @media (min-width: 580px) {
    height: 30px;
  }
`;

const PoweredBy = styled.div`
  display: none;

  @media (min-width: 580px) {
    display: inline-block;
    font-size: 13px;
    color: #9aa0a6;
    letter-spacing: 0.04em;
  }
`;
