import { Pokemon } from '../entities';

export interface SearchPokemon {
  execute(id: number | string): Promise<Pokemon | null>;
}
