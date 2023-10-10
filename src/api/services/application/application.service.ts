import { applicationApi } from '../../api';
import { TvShowDto } from './tv-show-dto';
import { ShowDto } from './show-dto';
import { EpisodeDto } from './episode-dto';
import { SeasonDto } from './season-dto';
import { GetShowsParams } from '../../../util/app-util';
import { Params } from '../../../util/app-util';

const SEARCH_PATH = '/search/shows';
const SHOWS_PATH = '/shows';
const SEASONS_PATH = '/seasons';

const getShows = async ({ signal, searchTerm }: GetShowsParams): Promise<TvShowDto[]> => {
  // API has a required query param "q"
  const params = { q: searchTerm };
  const response = await applicationApi.get(SEARCH_PATH, { params, signal });
  return response.data;
};

const getShowByIdWithCast = async ({ signal, id }: Params): Promise<ShowDto> => {
  const url = `${SHOWS_PATH}/${id}`;
  const response = await applicationApi.get(url, { signal, params: { embed: 'cast' } });
  return response.data;
};

const getShowByIdWithEpisodes = async ({ signal, id }: Params): Promise<ShowDto> => {
  const url = `${SHOWS_PATH}/${id}`;
  const response = await applicationApi.get(url, { signal, params: { embed: 'episodes' } });
  return response.data;
};

const getShowByIdWithSeasons = async ({ signal, id }: Params): Promise<ShowDto> => {
  const url = `${SHOWS_PATH}/${id}`;
  const response = await applicationApi.get(url, { signal, params: { embed: 'seasons' } });
  return response.data;
};

const getSeasons = async ({ signal, id }: Params): Promise<SeasonDto[]> => {
  const url = `${SHOWS_PATH}/${id}/seasons`;
  const response = await applicationApi.get(url, { signal });
  return response.data;
};

const getSeasonEpisodes = async ({ signal, id }: Params): Promise<EpisodeDto[]> => {
  const url = `${SEASONS_PATH}/${id}/episodes`;
  const response = await applicationApi.get(url, { signal });
  return response.data;
};

export const applicationService = {
  getShows,
  getShowByIdWithCast,
  getShowByIdWithEpisodes,
  getShowByIdWithSeasons,
  getSeasons,
  getSeasonEpisodes,
};
