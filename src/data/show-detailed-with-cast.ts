import { Cast } from './cast';
import { ShowDetailed } from './show-detailed';

export interface ShowDetailedWithCast {
  show: ShowDetailed;
  cast: Cast[];
}
