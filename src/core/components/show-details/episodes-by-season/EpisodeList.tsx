import { Episode } from '../../../../data/episode';
import ShowEpisode from './ShowEpisode';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../../../data/application-repository';
import { Season } from '../../../../data/season';

interface EpisodeListProps {
  season: Season | null;
}

const EpisodeList = ({ season }: EpisodeListProps) => {
  const { data: episodes } = useQuery({
    queryKey: ['tv-shows', season, 'season-episodes'],
    queryFn: ({ signal }) => applicationRepository.getSeasonEpisodes({ signal, id: season!.id }),
  });

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
    border-top: 1px solid #333;
  }
`;
