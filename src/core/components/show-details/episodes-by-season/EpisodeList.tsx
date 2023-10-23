import { Episode } from '../../../../data/episode';
import ShowEpisode from './ShowEpisode';
import styled from '@emotion/styled';
import { getColor } from '../../../theme/colors/colors.ts';
import useTvShowSeasonEpisodesData from '../../../hooks/useTvShowSeasonEpisodesData.ts';
import { EpisodeListProps } from '../../../../util/app-util.ts';

const EpisodeList = ({ season }: EpisodeListProps) => {
  const { data: episodes } = useTvShowSeasonEpisodesData({ season });

  return (
    <>
      {episodes ? (
        <EpisodesSection>
          {episodes.map((episode: Episode) => {
            return <ShowEpisode key={episode.id} episode={episode} season={season!.number} />;
          })}
        </EpisodesSection>
      ) : null}
    </>
  );
};

export default EpisodeList;

const EpisodesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & article:not(:first-of-type) {
    border-top: 1px solid ${getColor('posterBorder')};
  }
`;
