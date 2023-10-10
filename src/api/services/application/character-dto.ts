import { ImageDto } from './image-dto';

export interface CharacterDto {
  id: number; // 51550
  url: string; // 'https://www.tvmaze.com/characters/51550/stargate-sg-1-tealc'
  name: string; // "Teal'c"
  image: ImageDto;
  _links: any;
}
