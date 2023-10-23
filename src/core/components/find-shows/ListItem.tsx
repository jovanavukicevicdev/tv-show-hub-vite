import { Link } from 'react-router-dom';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import Chip from '@mui/material/Chip';
import { Show } from '../../../data/show';
import Tooltip from '@mui/material/Tooltip';
import { ListItemStyles } from './ListItem.styles.ts';

interface ListItemParams {
  show: Show;
}

const IMDB_BASE_URL = 'https://www.imdb.com/title';

const ListItem = ({ show }: ListItemParams) => {
  return (
    <li>
      <ListItemStyles.ShowCard>
        <ListItemStyles.ImageWrapper>
          {show.image ? (
            <Link to={`${show.id}`}>
              <ListItemStyles.StyledImage src={show.image} alt={show.name} />
            </Link>
          ) : (
            <ListItemStyles.NoImage>
              <TvOffOutlinedIcon />
            </ListItemStyles.NoImage>
          )}
        </ListItemStyles.ImageWrapper>

        <ListItemStyles.ShowInfo>
          <ListItemStyles.NameAndImdbWrapper>
            <Tooltip title="See details" placement="top">
              <ListItemStyles.Name to={`${show.id}`}>{show.name}</ListItemStyles.Name>
            </Tooltip>
            {show.imdbUrl ? (
              <ListItemStyles.LinkWrapper>
                <ListItemStyles.LinkDivider />
                <ListItemStyles.ExternalLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`${IMDB_BASE_URL}/${show.imdbUrl}`}
                >
                  IMDb
                </ListItemStyles.ExternalLink>
              </ListItemStyles.LinkWrapper>
            ) : null}
            {show.tvMazeUrl ? (
              <ListItemStyles.LinkWrapper>
                <ListItemStyles.LinkDivider />
                <ListItemStyles.ExternalLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to={show.tvMazeUrl}
                >
                  TVmaze
                </ListItemStyles.ExternalLink>
              </ListItemStyles.LinkWrapper>
            ) : null}
          </ListItemStyles.NameAndImdbWrapper>
          {show.premiered ? (
            <ListItemStyles.StyledPremieredEnded>
              {show.premiered.split('-')[0]}&ndash;
            </ListItemStyles.StyledPremieredEnded>
          ) : null}
          {show.ended ? (
            <ListItemStyles.StyledPremieredEnded>
              {show.ended.split('-')[0]}
            </ListItemStyles.StyledPremieredEnded>
          ) : null}
          {show.genres?.length ? (
            <ListItemStyles.GenresWrapper>
              {show.genres.map((genre) => {
                return <Chip key={genre} label={genre} variant="outlined" className="genre-chip" />;
              })}
            </ListItemStyles.GenresWrapper>
          ) : null}
        </ListItemStyles.ShowInfo>
      </ListItemStyles.ShowCard>
    </li>
  );
};

export default ListItem;
