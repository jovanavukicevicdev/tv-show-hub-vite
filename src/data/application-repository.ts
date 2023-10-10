import { applicationService } from '../api/services/application/application.service';
import { Show } from './show';
import { TvShowDto } from '../api/services/application/tv-show-dto';
import { ExternalsDto } from '../api/services/application/externals-dto';
import { Externals } from './externals';
import { NetworkDto } from '../api/services/application/network-dto';
import { Network } from './network';
import { CountryDto } from '../api/services/application/country-dto';
import { Country } from './country';
import { ScheduleDto } from '../api/services/application/schedule-dto';
import { Schedule } from './schedule';
import { ShowDto } from '../api/services/application/show-dto';
import { ShowDetailed } from './show-detailed';
import { CastDto } from '../api/services/application/cast-dto';
import { Cast } from './cast';
import { PersonDto } from '../api/services/application/person-dto';
import { Person } from './person';
import { CharacterDto } from '../api/services/application/character-dto';
import { Character } from './character';
import { EpisodeDto } from '../api/services/application/episode-dto';
import { Episode } from './episode';
import { ShowDetailedWithCast } from './show-detailed-with-cast';
import { SeasonDto } from '../api/services/application/season-dto';
import { Season } from './season';
import { ShowDetailedWithSeasons } from './show-detailed-with-seasons';
import { GetShowsParams } from '../util/app-util';
import { Params } from '../util/app-util';

const toSeason = (season: SeasonDto): Season => {
  return {
    id: season.id,
    number: season.number,
    url: season.url,
  };
};

const toExternals = (externals: ExternalsDto): Externals => {
  return {
    ...externals,
  };
};

const toCountry = (country: CountryDto): Country => {
  return {
    ...country,
  };
};

const toNetwork = (network: NetworkDto): Network => {
  return {
    ...network,
    country: toCountry(network.country),
  };
};

const toSchedule = (schedule: ScheduleDto): Schedule => {
  return {
    ...schedule,
  };
};

// Omit a bunch of unnecessary properties
const toShow = (show: ShowDto): Show => {
  return {
    id: show.id,
    premiered: show.premiered,
    ended: show.ended,
    name: show.name,
    genres: [...show.genres],
    language: show.language,
    image: show.image ? show.image.medium : null,
    averageRating: show.rating ? show.rating.average : null,
    imdbUrl: show.externals?.imdb ? show.externals.imdb : null,
    tvMazeUrl: show.url,
  };
};

const toPerson = ({ _links, updated, ...rest }: PersonDto): Person => {
  return {
    ...rest,
    country: rest.country ? rest.country.name : null,
  };
};

const toCharacter = ({ _links, ...rest }: CharacterDto): Character => {
  return {
    ...rest,
  };
};

const toCast = (show: CastDto): Cast => {
  return {
    person: toPerson(show.person),
    character: toCharacter(show.character),
  };
};

const toEpisode = ({ _links, type, airstamp, airtime, rating, ...rest }: EpisodeDto): Episode => {
  return {
    ...rest,
    image: rest.image ? rest.image.medium : null,
    averageRating: rating ? rating.average : null,
    summary: { __html: rest.summary },
  };
};

const toShowDetailed = ({
  _links,
  weight,
  webChannel,
  dvdCountry,
  runtime,
  ...rest
}: ShowDto): ShowDetailed => {
  return {
    ...rest,
    genres: [...rest.genres],
    summary: { __html: rest.summary }, // Fix for: Type 'string' is not assignable to type '{ __html: string | TrustedHTML; }'
    externals: rest.externals ? toExternals(rest.externals) : null,
    image: rest.image ? rest.image.original : null,
    network: rest.network ? toNetwork(rest.network) : null,
    averageRating: rest.rating ? rest.rating.average : null,
    schedule: rest.schedule ? toSchedule(rest.schedule) : null,
  };
};

const toShowDetailedWithCast = (params: ShowDto): ShowDetailedWithCast => {
  return {
    show: toShowDetailed(params),
    cast: params._embedded.cast.map((castMember: CastDto) => toCast(castMember)),
  };
};

const toShowDetailedWithSeasons = (params: ShowDto): ShowDetailedWithSeasons => {
  return {
    show: toShowDetailed(params),
    seasons: params._embedded.seasons.map((season: SeasonDto) => toSeason(season)),
  };
};

const getShows = async (params: GetShowsParams): Promise<Show[]> => {
  const data = await applicationService.getShows(params);
  return data.map((elem: TvShowDto) => toShow(elem.show));
};

const getShowByIdWithCast = async (params: Params): Promise<ShowDetailedWithCast> => {
  const data = await applicationService.getShowByIdWithCast(params);
  return toShowDetailedWithCast(data);
};

const getShowByIdWithSeasons = async (params: Params): Promise<ShowDetailedWithSeasons> => {
  const data = await applicationService.getShowByIdWithSeasons(params);
  return toShowDetailedWithSeasons(data);
};

const getSeasons = async (params: Params): Promise<Season[]> => {
  const data = await applicationService.getSeasons(params);
  return data.map((elem: SeasonDto) => toSeason(elem));
};

const getSeasonEpisodes = async (params: Params): Promise<Episode[]> => {
  const data = await applicationService.getSeasonEpisodes(params);
  return data.map((elem: EpisodeDto) => toEpisode(elem));
};

export const applicationRepository = {
  getShows,
  getShowByIdWithCast,
  getShowByIdWithSeasons,
  getSeasons,
  getSeasonEpisodes,
};
