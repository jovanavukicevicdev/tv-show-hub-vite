import { useParams } from 'react-router-dom';
import { applicationRepository } from '../../../data/application-repository';
import { useQuery } from '@tanstack/react-query';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Chip from '@mui/material/Chip';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ShowDetailsStyles } from './ShowDetails.styles';
import { PathParams } from '../../../util/app-util';
import { useTranslation } from 'react-i18next';

const ShowDetails = () => {
  const { id } = useParams() as PathParams;

  const { t } = useTranslation();

  const { data: show } = useQuery({
    queryKey: ['tv-shows', id, 'cast-embedded'],
    queryFn: ({ signal }) => applicationRepository.getShowByIdWithCast({ signal, id: +id }),
  });

  const { data: seasons } = useQuery({
    queryKey: ['tv-shows', id, 'seasons'],
    queryFn: ({ signal }) => applicationRepository.getSeasons({ signal, id: +id }),
  });

  return (
    <ShowDetailsStyles.PageContainer>
      <ShowDetailsStyles.BackToSearch>
        <ShowDetailsStyles.BackToSearchLink to="..">
          <NavigateBeforeIcon />
          <span>{t('back')}</span>
        </ShowDetailsStyles.BackToSearchLink>
      </ShowDetailsStyles.BackToSearch>

      <ShowDetailsStyles.PosterHeader>
        <ShowDetailsStyles.NameAndYear>
          <ShowDetailsStyles.ShowName>{show?.show.name}</ShowDetailsStyles.ShowName>
          <ShowDetailsStyles.Year>
            {show?.show?.premiered ? (
              <span>{show?.show.premiered.split('-')[0]}&ndash;</span>
            ) : null}
            {show?.show?.ended ? <span>{show?.show.ended.split('-')[0]}</span> : null}
          </ShowDetailsStyles.Year>
        </ShowDetailsStyles.NameAndYear>
        {show?.show?.averageRating ? (
          <ShowDetailsStyles.StarAndRating>
            <ShowDetailsStyles.Rating>{t('rating')}</ShowDetailsStyles.Rating>
            <ShowDetailsStyles.AverageRating>
              <StarRoundedIcon />
              <ShowDetailsStyles.AverageRatingValue>
                {show?.show.averageRating}
                <ShowDetailsStyles.StyledSpan>/10</ShowDetailsStyles.StyledSpan>
              </ShowDetailsStyles.AverageRatingValue>
            </ShowDetailsStyles.AverageRating>
          </ShowDetailsStyles.StarAndRating>
        ) : null}
      </ShowDetailsStyles.PosterHeader>

      <section>
        <ShowDetailsStyles.PosterWrapper>
          {show?.show?.image ? (
            <ShowDetailsStyles.Poster src={show.show.image} alt="poster" />
          ) : (
            <ShowDetailsStyles.NoImage>
              <TvOffOutlinedIcon />
            </ShowDetailsStyles.NoImage>
          )}
        </ShowDetailsStyles.PosterWrapper>

        {show?.show?.genres?.length ? (
          <ShowDetailsStyles.Genres>
            {show.show.genres.map((genre) => {
              return <Chip key={genre} label={genre} variant="outlined" className="genre-chip" />;
            })}
          </ShowDetailsStyles.Genres>
        ) : null}

        {show?.show?.summary ? (
          <ShowDetailsStyles.StyledSummary dangerouslySetInnerHTML={show.show.summary} />
        ) : null}

        {show?.cast?.length ? (
          <ShowDetailsStyles.ShowCast>
            <ShowDetailsStyles.Label>{t('stars')}</ShowDetailsStyles.Label>
            <ShowDetailsStyles.HorizontalList>
              {show.cast.map((member, index) => {
                return (
                  <ShowDetailsStyles.CastMember key={member.person.id}>
                    {member.person.name}
                    {index !== show.cast.length - 1 ? <ShowDetailsStyles.LinkDivider /> : null}
                  </ShowDetailsStyles.CastMember>
                );
              })}
            </ShowDetailsStyles.HorizontalList>
          </ShowDetailsStyles.ShowCast>
        ) : null}

        {seasons?.length ? (
          <ShowDetailsStyles.ShowSeasons>
            <ShowDetailsStyles.Label>{t('seasons')}</ShowDetailsStyles.Label>
            <ShowDetailsStyles.HorizontalList>
              {seasons.map((season, index) => {
                return (
                  <ShowDetailsStyles.StyledSeason
                    key={season.number}
                    to={`episodes?season=${season.number}`}
                  >
                    {season.number}
                    {index !== seasons.length - 1 ? <ShowDetailsStyles.SeasonsDivider /> : null}
                  </ShowDetailsStyles.StyledSeason>
                );
              })}
            </ShowDetailsStyles.HorizontalList>
          </ShowDetailsStyles.ShowSeasons>
        ) : null}
      </section>
    </ShowDetailsStyles.PageContainer>
  );
};

export default ShowDetails;
