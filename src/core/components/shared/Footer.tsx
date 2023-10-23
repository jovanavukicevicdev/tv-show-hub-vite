import styled from '@emotion/styled';
import { getVar } from '../../theme/ui-variables/ui-variables';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getColor } from '../../theme/colors/colors';
import TvMazeLogo from '../../../assets/images/tvm_api.png';
import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const TV_MAZE_API_URL = 'https://www.tvmaze.com/api';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter role="footer">
      <ContentWrapper>
        <CopyrightAndFollowUs>
          <FollowUs>
            <FacebookIcon className="facebook" />
            <InstagramIcon className="instagram" />
            <TwitterIcon className="twitter" />
            <RedditIcon className="reddit" />
          </FollowUs>

          <Copyright>© TvShowHub</Copyright>
        </CopyrightAndFollowUs>

        <PoweredByWrapper>
          <PoweredBy>{t('poweredBy')}</PoweredBy>

          <StyledLink href={TV_MAZE_API_URL} target="_blank" rel="noopener norefferer">
            <StyledTvMazeLogo src={TvMazeLogo} alt="TVmaze API logo" />
          </StyledLink>
        </PoweredByWrapper>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = muiStyled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: getVar('footerHeight'),
  padding: '20px 16px',
  color: theme.palette.mode === 'dark' ? getColor('textSecondary') : getColor('backgroundContrast'),

  '@media (min-width: 600px)': {
    padding: '20px 48px',
  },
}));

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${getVar('contentMaxWidth')};
  width: 100%;
  border-top: 1px solid ${getColor('posterBorder')};
  padding-top: 20px;
`;

const CopyrightAndFollowUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const FollowUs = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;

  svg {
    font-size: 1.5rem;
  }

  .facebook:hover {
    cursor: pointer;
    color: #4267b2;
  }

  .instagram:hover {
    cursor: pointer;
    color: #e1306c;
  }

  .twitter:hover {
    cursor: pointer;
    color: #1da1f2;
  }

  .reddit:hover {
    cursor: pointer;
    color: #ff4500;
  }
`;

const Copyright = styled.div`
  font-size: 13px;
  letter-spacing: 0.04em;
`;

const PoweredByWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 2px;
`;

const StyledLink = styled.a`
  height: 30px;
`;

const StyledTvMazeLogo = styled.img`
  height: 30px;
`;

const PoweredBy = styled.div`
  font-size: 13px;
  letter-spacing: 0.04em;
`;
