import { useParams, useSearchParams } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import { Season } from '../../../../data/season';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import EpisodeList from './EpisodeList';
import { PathParams } from '../../../../util/app-util';
import { useTranslation } from 'react-i18next';
import useTvShowWithSeasonsData from '../../../hooks/useTvShowWithSeasonsData';
import { EpisodesBySeasonStyles } from './EpisodesBySeason.styles';

const EpisodesBySeason = () => {
  const { id } = useParams() as PathParams;

  const [searchParams] = useSearchParams();
  const seasonNumber = searchParams.get('season');

  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  const { t } = useTranslation();

  const { data } = useTvShowWithSeasonsData({ id: +id });

  useEffect(() => {
    if (seasonNumber && data?.seasons.length) {
      const season = data.seasons.filter((s) => s.number === +seasonNumber)[0];
      setSelectedSeason(season);
    }
  }, [seasonNumber, data?.seasons]);

  return (
    <EpisodesBySeasonStyles.PageContainer>
      <EpisodesBySeasonStyles.PosterWrapper>
        {data?.show?.image ? (
          <EpisodesBySeasonStyles.Poster src={data.show.image} alt="poster" />
        ) : (
          <EpisodesBySeasonStyles.NoImage>
            <TvOffOutlinedIcon />
          </EpisodesBySeasonStyles.NoImage>
        )}
        <EpisodesBySeasonStyles.TextWrapper>
          <EpisodesBySeasonStyles.ShowName>{data?.show?.name}</EpisodesBySeasonStyles.ShowName>
          <EpisodesBySeasonStyles.Title>{t('episodeList')}</EpisodesBySeasonStyles.Title>
        </EpisodesBySeasonStyles.TextWrapper>
      </EpisodesBySeasonStyles.PosterWrapper>

      <EpisodesBySeasonStyles.SeasonsBox>
        <EpisodesBySeasonStyles.SeasonsLabel>{t('seasons')}</EpisodesBySeasonStyles.SeasonsLabel>
        <ToggleButtonGroup
          className="seasons-toggle"
          value={selectedSeason}
          exclusive
          onChange={(_, newSeason: Season) => setSelectedSeason(newSeason)}
        >
          {data?.seasons?.length
            ? data.seasons.map((season: Season) => {
                return (
                  <ToggleButton
                    disabled={season.number === selectedSeason?.number}
                    value={season}
                    key={season.number}
                  >
                    {season.number}
                  </ToggleButton>
                );
              })
            : null}
        </ToggleButtonGroup>
      </EpisodesBySeasonStyles.SeasonsBox>

      <EpisodeList season={selectedSeason} />
    </EpisodesBySeasonStyles.PageContainer>
  );
};

export default EpisodesBySeason;
