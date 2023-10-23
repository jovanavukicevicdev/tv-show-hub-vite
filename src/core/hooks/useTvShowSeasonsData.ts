import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository';

const useTvShowSeasonsData = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ['tv-shows', id, 'seasons'],
    queryFn: ({ signal }) => applicationRepository.getSeasons({ signal, id: +id }),
  });
};

export default useTvShowSeasonsData;
