import { Pokemon } from '../entities';

export interface FetchPokemons {
  execute: (offset: number) => Promise<Pokemon[]>;
}
