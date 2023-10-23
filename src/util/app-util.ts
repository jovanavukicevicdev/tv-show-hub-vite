import { Season } from '../data/season.ts';

export type PathParams = {
  id: string;
};

export interface GetShowsParams {
  signal: AbortSignal;
  searchTerm: string;
}

export interface Params {
  signal: AbortSignal;
  id: number;
}

export interface EpisodeListProps {
  season: Season | null;
}
