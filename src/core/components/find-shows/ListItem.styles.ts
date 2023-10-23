import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors.ts';
import { styled as muiStyled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ShowCard = styled.div`
  display: block;

  @media (min-width: 600px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ImageWrapper = styled.div`
  padding: 8px 0;
`;

const NoImage = styled.div`
  width: 178px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${getColor('posterBorder')};
  border-radius: 6px;

  & svg {
    fill: ${getColor('posterBorder')};
    font-size: 48px;
  }
`;

const StyledImage = styled.img`
  width: 178px;
  border: 1px solid ${getColor('posterBorder')};
  border-radius: 6px;
`;

const ShowInfo = styled.div`
  padding: 0 0 16px 0;

  @media (min-width: 600px) {
    padding: 8px 16px;
  }
`;

const NameAndImdbWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Name = muiStyled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? getColor('primary') : '#2473f2',

  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#8ab4f8' : getColor('primary'),
  },
}));

const LinkWrapper = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const LinkDivider = styled.div`
  height: 2px;
  width: 2px;
  margin-inline: 8px;
  border-radius: 1px;
  background-color: ${getColor('textSecondary')};
`;

const ExternalLink = muiStyled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? getColor('primary') : '#2473f2',

  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#8ab4f8' : getColor('primary'),
  },
}));

const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-block: 8px;
  flex-wrap: wrap;
`;

const StyledPremieredEnded = styled.span`
  font-size: 14px;
`;

export const ListItemStyles = {
  ShowCard,
  ImageWrapper,
  NoImage,
  StyledImage,
  ShowInfo,
  NameAndImdbWrapper,
  Name,
  LinkWrapper,
  LinkDivider,
  ExternalLink,
  GenresWrapper,
  StyledPremieredEnded,
};