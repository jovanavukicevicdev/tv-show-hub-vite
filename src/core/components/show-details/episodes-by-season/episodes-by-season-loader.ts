import { queryClient } from '../../../../util/react-query.ts';
import { applicationRepository } from '../../../../data/application-repository.ts';

export function episodesBySeasonLoader({ params }: any) {
  // Trigger the query programmatically
  return queryClient.fetchQuery({
    queryKey: ['tv-shows', params.id, 'seasons-embedded'],
    queryFn: ({ signal }) =>
      applicationRepository.getShowByIdWithSeasons({ signal, id: params.id }),
  });
}
