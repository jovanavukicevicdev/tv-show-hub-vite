import styled from '@emotion/styled';
import { getVar } from '../../theme/ui-variables/ui-variables';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <StyledText>© TvShowHub</StyledText>

        <FollowUs>
          <FacebookIcon className="facebook" />
          <InstagramIcon className="instagram" />
          <TwitterIcon className="twitter" />
          <RedditIcon className="reddit" />
        </FollowUs>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${getVar('footerHeight')};
  padding: 20px 16px;

  @media (min-width: 580px) {
    padding: 20px 48px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  gap: 10px;
  border-top: 1px solid #333;
  padding-top: 20px;
`;

const FollowUs = styled.div`
  display: flex;
  align-items: center;
  color: #9aa0a6;
  gap: 2px;

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

const StyledText = styled.div`
  font-size: 13px;
  color: #9aa0a6;
  letter-spacing: 0.04em;
`;
