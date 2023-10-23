import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../data/application-repository.ts';

const useTvShowWithCastData = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ['tv-shows', id, 'cast-embedded'],
    queryFn: ({ signal }) => applicationRepository.getShowByIdWithCast({ signal, id: +id }),
  });
};

export default useTvShowWithCastData;
