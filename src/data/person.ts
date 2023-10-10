import { Image } from './image';

export interface Person {
  id: number; // 33991
  url: string; // 'https://www.tvmaze.com/people/33991/christopher-judge'
  name: string; // 'Christopher Judge'
  country: string | null;
  birthday: string; // '1964-10-13'
  deathday: string | null; // null
  gender: string; // 'Male'
  image: Image;
}
