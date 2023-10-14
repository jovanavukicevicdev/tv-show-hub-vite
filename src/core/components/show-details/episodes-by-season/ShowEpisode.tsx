import { Episode } from '../../../../data/episode';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import styled from '@emotion/styled';
import { getColor } from '../../../theme/colors/colors';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useTranslation } from 'react-i18next';

interface ShowEpisodeProps {
  episode: Episode;
  season: number | null;
}

const EN = 'en-US';
const DE = 'de-DE';

const ShowEpisode = ({ episode, season }: ShowEpisodeProps) => {
  const { i18n, t } = useTranslation();

  return (
    <EpisodeWrapper>
      {episode?.image ? (
        <Poster src={episode.image} alt={t('episodePoster')} />
      ) : (
        <NoImage>
          <TvOffOutlinedIcon />
        </NoImage>
      )}
      <EpisodeInfo>
        <NameAndDate>
          <EpisodeName>
            {season ? (
              <SeasonAndEpisode>{`S${season}.E${episode.number}`} ∙ </SeasonAndEpisode>
            ) : null}
            {episode?.name ? <span style={{ marginLeft: '6px' }}>{episode?.name}</span> : '--'}
          </EpisodeName>
          <AirDate>
            {episode?.airdate
              ? new Date(episode.airdate).toLocaleDateString(i18n.language === 'en' ? EN : DE, {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })
              : null}
          </AirDate>
        </NameAndDate>

        {episode?.summary ? <Summary dangerouslySetInnerHTML={episode.summary} /> : null}

        {episode?.averageRating ? (
          <AverageRatingWrapper>
            <StarRoundedIcon />
            <AverageRatingValue>
              {episode.averageRating}
              <StyledSpan>/10</StyledSpan>
            </AverageRatingValue>
          </AverageRatingWrapper>
        ) : null}
      </EpisodeInfo>
    </EpisodeWrapper>
  );
};

export default ShowEpisode;

const EpisodeWrapper = styled.article`
  padding-block: 8px;
  display: block;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Poster = styled.img`
  width: 200px;
  border: 1px solid ${getColor('posterBorder')};
`;

const NoImage = styled.div`
  width: 200px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${getColor('posterBorder')};

  & svg {
    fill: ${getColor('posterBorder')};
    font-size: 32px;
  }
`;

const EpisodeInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  @media (min-width: 768px) {
    width: calc(100% - 210px);
  }
`;

const NameAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const EpisodeName = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${getColor('text')};
  font-weight: bold;
`;

const AirDate = styled.div`
  font-size: 13px;
  color: ${getColor('textSecondary')};
  letter-spacing: 0.03em;
`;

const Summary = styled.div`
  letter-spacing: 0.05em;
  font-size: 14px;

  & p {
    margin: 0;
  }
`;

const AverageRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #f5c518;

  & svg {
    font-size: 16px;
  }
`;

const AverageRatingValue = styled.div`
  font-size: 14px;
  color: ${getColor('text')};
  margin-left: 2px;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const StyledSpan = styled.span`
  font-size: 14px;
  color: ${getColor('textSecondary')};
`;

const SeasonAndEpisode = styled.div`
  display: flex;
  align-items: center;
`;
