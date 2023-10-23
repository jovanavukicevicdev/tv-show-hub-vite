import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository';

const useTvShowsData = ({ searchTerm }: { searchTerm: string }) => {
  return useQuery({
    queryKey: ['tv-shows', { search: searchTerm }],
    queryFn: ({ signal }) => applicationRepository.getShows({ searchTerm, signal }),
    enabled: searchTerm !== '',
  });
};

export default useTvShowsData;
