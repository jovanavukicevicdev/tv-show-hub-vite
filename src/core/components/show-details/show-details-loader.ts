import { queryClient } from '../../../util/react-query.ts';
import { applicationRepository } from '../../../data/application-repository.ts';

export function showDetailsLoader({ params }: any) {
  // We trigger the query programmatically
  return queryClient.fetchQuery({
    queryKey: ['tv-shows', params.id, 'cast-embedded'],
    queryFn: ({ signal }) => applicationRepository.getShowByIdWithCast({ signal, id: params.id }),
  });
}
