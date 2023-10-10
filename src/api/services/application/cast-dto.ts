import { PersonDto } from './person-dto';
import { CharacterDto } from './character-dto';

export interface CastDto {
  person: PersonDto;
  character: CharacterDto;
  self: boolean; // false
  voice: boolean; // false
}
