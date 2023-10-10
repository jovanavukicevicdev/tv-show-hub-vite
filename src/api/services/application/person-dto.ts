import { CountryDto } from './country-dto';
import { ImageDto } from './image-dto';

export interface PersonDto {
  id: number; // 33991
  url: string; // 'https://www.tvmaze.com/people/33991/christopher-judge'
  name: string; // 'Christopher Judge'
  country: CountryDto;
  birthday: string; // '1964-10-13'
  deathday: string | null; // null
  gender: string; // 'Male'
  image: ImageDto;
  updated: number; // 1670100471
  _links: any;
}
