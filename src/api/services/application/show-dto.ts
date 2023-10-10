import { ExternalsDto } from './externals-dto';
import { ImageDto } from './image-dto';
import { NetworkDto } from './network-dto';
import { RatingDto } from './rating-dto';
import { ScheduleDto } from './schedule-dto';

export interface ShowDto {
  id: number; // 204
  averageRuntime: number; // 60
  dvdCountry: any;
  ended: string; // "2008-07-29"
  externals: ExternalsDto | null;
  genres: string[]; // ["Action", "Adventure", "Science-Fiction"]
  image: ImageDto | null;
  language: string; // "English"
  name: string; // "Stargate SG-1"
  network: NetworkDto | null;
  officialSite: string; // "http://stargate.mgm.com/view/series/1/index.html"
  premiered: string; // "1997-07-27"
  rating: RatingDto | null;
  runtime: number; // 60
  schedule: ScheduleDto | null;
  status: string; // 'Ended'
  summary: string; // "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>"
  type: string; // 'Scripted'
  updated: number; // 1649569551
  url: string; // "https://www.tvmaze.com/shows/204/stargate-sg-1"
  webChannel: any;
  weight: number; // 99
  _links: any;
  _embedded: any;
}
