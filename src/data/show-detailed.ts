import { Externals } from './externals';
import { Network } from './network';
import { Schedule } from './schedule';

export interface ShowDetailed {
  id: number; // 204
  averageRuntime: number; // 60
  ended: string; // "2008-07-29"
  externals: Externals | null;
  genres: string[]; // ["Action", "Adventure", "Science-Fiction"]
  image: string | null;
  language: string; // "English"
  name: string; // "Stargate SG-1"
  network: Network | null;
  officialSite: string; // "http://stargate.mgm.com/view/series/1/index.html"
  premiered: string; // "1997-07-27"
  averageRating: number | null; // 8.9
  schedule: Schedule | null;
  summary: { __html: string }; // "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>"
  type: string; // 'Scripted'
  updated: number; // 1649569551
  url: string; // "https://www.tvmaze.com/shows/204/stargate-sg-1"
}
