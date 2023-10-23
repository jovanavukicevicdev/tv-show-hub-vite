import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository';

const useTvShowWithSeasonsData = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ['tv-shows', id, 'seasons-embedded'],
    queryFn: ({ signal }) => applicationRepository.getShowByIdWithSeasons({ signal, id: +id }),
  });
};

export default useTvShowWithSeasonsData;
