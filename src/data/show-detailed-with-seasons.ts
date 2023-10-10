import { ShowDetailed } from './show-detailed';
import { Season } from './season';

export interface ShowDetailedWithSeasons {
  show: ShowDetailed;
  seasons: Season[];
}
