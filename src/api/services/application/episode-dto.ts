import { RatingDto } from './rating-dto';
import { ImageDto } from './image-dto';

export interface EpisodeDto {
  id: number; // 13436
  url: string; // 'https://www.tvmaze.com/episodes/13436/stargate-sg-1-1x01-children-of-the-gods'
  name: string; // 'Children of the Gods'
  season: number; // 1
  number: number; // 1
  type: string; // 'regular'
  airdate: string; // '1997-07-27'
  airtime: string; // '20:00'
  airstamp: string; // '1997-07-28T00:00:00+00:00'
  runtime: number; // 120
  rating: RatingDto;
  image: ImageDto;
  summary: string; // "<p>The System Lord Apophis launches an attack through the Stargate, tucked away by the military after the events of the movie, and the SGC program is reactivated and given a new objective - seek out and find the alien invaders and defeat them. Jack O'Neill is called out of retirement and sent to locate Daniel Jackson on Abydos.</p>"
  _links: any;
}
