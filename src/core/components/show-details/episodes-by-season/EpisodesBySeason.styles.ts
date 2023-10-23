import styled from '@emotion/styled';
import { getVar } from '../../../theme/ui-variables/ui-variables.ts';
import { Link } from 'react-router-dom';
import { getColor } from '../../../theme/colors/colors.ts';
import { styled as muiStyled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const PageContainer = styled.div`
  width: 100%;
  max-width: ${getVar('contentMaxWidth')};
  margin: 0 auto;
`;

const BackToSearchWrapper = styled.div`
  margin-bottom: 24px;
`;

const BackToSearchLink = styled(Link)`
  width: 70px;
  display: flex;
  gap: 6px;

  span {
    letter-spacing: 0.03em;
    margin-left: -6px;
  }
`;

const PosterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Poster = styled.img`
  width: 90px;
  border: 1px solid ${getColor('posterBorder')};
`;

const NoImage = styled.div`
  width: 90px;
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${getColor('posterBorder')};

  & svg {
    fill: ${getColor('posterBorder')};
    font-size: 24px;
  }
`;

const TextWrapper = styled.div`
  padding-left: 20px;
`;

const ShowName = styled.div`
  font-weight: 600;
  color: ${getColor('textSecondary')};
  margin-bottom: -6px;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: -5px;
`;

const SeasonsBox = muiStyled(Box)(({ theme }) => ({
  margin: '16px 0 12px',
  padding: '8px',
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
}));

const SeasonsLabel = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: ${getColor('textSecondary')};
  margin-bottom: 4px;
`;

export const EpisodesBySeasonStyles = {
  PageContainer,
  BackToSearchWrapper,
  BackToSearchLink,
  PosterWrapper,
  Poster,
  NoImage,
  TextWrapper,
  ShowName,
  Title,
  SeasonsBox,
  SeasonsLabel,
};
