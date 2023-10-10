import { Link } from 'react-router-dom';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import Chip from '@mui/material/Chip';
import { Show } from '../../../data/show';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';

interface ListItemParams {
  show: Show;
}

const IMDB_BASE_URL = 'https://www.imdb.com/title';

const ListItem = ({ show }: ListItemParams) => {
  return (
    <li>
      <ShowCard>
        <ImageWrapper>
          {show.image ? (
            <Link to={`${show.id}`}>
              <StyledImage src={show.image} alt={show.name} />
            </Link>
          ) : (
            <NoImage>
              <TvOffOutlinedIcon />
            </NoImage>
          )}
        </ImageWrapper>

        <ShowInfo>
          <NameAndImdbWrapper>
            <Tooltip title="See details" placement="top">
              <Link to={`${show.id}`}>{show.name}</Link>
            </Tooltip>
            {show.imdbUrl ? (
              <LinkWrapper>
                <LinkDivider />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${IMDB_BASE_URL}/${show.imdbUrl}`}
                >
                  IMDb
                </a>
              </LinkWrapper>
            ) : null}
            {show.tvMazeUrl ? (
              <LinkWrapper>
                <LinkDivider />
                <a target="_blank" rel="noopener noreferrer" href={show.tvMazeUrl}>
                  TVmaze
                </a>
              </LinkWrapper>
            ) : null}
          </NameAndImdbWrapper>
          {show.premiered ? (
            <StyledPremieredEnded>{show.premiered.split('-')[0]}&ndash;</StyledPremieredEnded>
          ) : null}
          {show.ended ? (
            <StyledPremieredEnded>{show.ended.split('-')[0]}</StyledPremieredEnded>
          ) : null}
          {show.genres?.length ? (
            <GenresWrapper>
              {show.genres.map((genre) => {
                return <Chip key={genre} label={genre} variant="outlined" className="genre-chip" />;
              })}
            </GenresWrapper>
          ) : null}
        </ShowInfo>
      </ShowCard>
    </li>
  );
};

export default ListItem;

const ShowCard = styled.div`
  display: block;

  @media (min-width: 580px) {
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
  border: 1px solid #3a3a3a;
  border-radius: 6px;

  & svg {
    fill: #3a3a3a;
    font-size: 48px;
  }
`;

const StyledImage = styled.img`
  width: 178px;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
`;

const ShowInfo = styled.div`
  padding: 0 0 16px 0;

  @media (min-width: 580px) {
    padding: 8px 16px;
  }
`;

const NameAndImdbWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

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
  background-color: #9aa0a6;
`;

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
