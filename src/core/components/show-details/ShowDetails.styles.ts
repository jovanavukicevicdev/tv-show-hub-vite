import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getColor } from '../../theme/colors/colors';

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const BackToSearch = styled.div`
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

const PosterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const NameAndYear = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ShowName = styled.h2`
  letter-spacing: 0.02em;
  margin: 0;
`;

const Year = styled.div`
  font-size: 14px;
  color: #9aa0a6;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

const StarAndRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AverageRating = styled.div`
  display: flex;
  align-items: flex-end;
  color: #f5c518;

  & svg {
    font-size: 32px;
  }
`;

const AverageRatingValue = styled.div`
  font-size: 18px;
  color: ${getColor('text')};
  margin-left: 2px;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const Rating = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  line-height: 1;
  color: #9aa0a6;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  color: #9aa0a6;
`;

const PosterWrapper = styled.div`
  padding: 8px 0;
`;

const Poster = styled.img`
  width: 280px;
  border: 1px solid #333;
`;

const NoImage = styled.div`
  width: 280px;
  height: 411px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a3a3a;

  & svg {
    fill: #3a3a3a;
    font-size: 48px;
  }
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const StyledSummary = styled.div`
  letter-spacing: 0.03em;
`;

const ShowCast = styled.div`
  padding-block: 12px;
  border-block: 1px solid #3a3a3a;
  display: flex;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: 600;
  margin-right: 12px;
  color: ${getColor('text')};
  letter-spacing: 0.02em;
`;

const CastMember = styled.span`
  display: flex;
  align-items: center;
  color: ${getColor('textSecondary')};
`;

const LinkDivider = styled.div`
  height: 2px;
  width: 2px;
  margin-inline: 8px;
  border-radius: 1px;
  background-color: #9aa0a6;
`;

const SeasonsDivider = styled.div`
  height: 1px;
  width: 24px;
`;

const ShowSeasons = styled.div`
  padding-block: 12px;
  display: flex;
  align-items: flex-start;
`;

const StyledSeason = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const HorizontalList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ShowDetailsStyles = {
  PageContainer,
  BackToSearch,
  BackToSearchLink,
  PosterHeader,
  NameAndYear,
  ShowName,
  Year,
  StarAndRating,
  AverageRating,
  AverageRatingValue,
  Rating,
  StyledSpan,
  PosterWrapper,
  Poster,
  NoImage,
  Genres,
  StyledSummary,
  ShowCast,
  Label,
  CastMember,
  LinkDivider,
  SeasonsDivider,
  StyledSeason,
  ShowSeasons,
  HorizontalList,
};
