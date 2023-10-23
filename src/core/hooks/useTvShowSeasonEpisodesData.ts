import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository.ts';
import { EpisodeListProps } from '../../util/app-util.ts';

const useTvShowSeasonEpisodesData = ({ season }: EpisodeListProps) => {
  return useQuery({
    queryKey: ['tv-shows', season, 'season-episodes'],
    queryFn: ({ signal }) => applicationRepository.getSeasonEpisodes({ signal, id: season!.id }),
  });
};

export default useTvShowSeasonEpisodesData;
