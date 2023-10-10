import { NetworkDto } from './network-dto';
import { ImageDto } from './image-dto';

export interface SeasonDto {
  id: number; // 838
  url: string; // 'https://www.tvmaze.com/seasons/838/stargate-sg-1-season-1'
  number: number; // 1
  name: string;
  episodeOrder: number; // 21
  premiereDate: string; // '1997-07-27'
  endDate: string; // '1998-03-06'
  network: NetworkDto;
  webChannel: any; // null
  image: ImageDto;
  summary: string; // "\u003Cp\u003EThe first season is about a military-science expedition team discovering how to use the ancient device, named the Stargate, to explore the galaxy. However, they encountered a powerful enemy named the Goa'uld, which is bent on destroying Earth and all that oppose them.\u003C/p\u003E"
  _links: any;
}
