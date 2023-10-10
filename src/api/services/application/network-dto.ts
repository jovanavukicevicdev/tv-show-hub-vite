import { CountryDto } from './country-dto';

export interface NetworkDto {
  country: CountryDto;
  id: number; // 16
  name: string; // "Syfy"
  officialSite: string;
}
