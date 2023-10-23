import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository.ts';

const useTvShowsData = ({ searchTerm }: { searchTerm: string }) => {
  return useQuery({
    queryKey: ['tv-shows', { search: searchTerm }],
    queryFn: ({ signal }) => applicationRepository.getShows({ searchTerm, signal }),
    enabled: searchTerm !== '',
  });
};

export default useTvShowsData;
