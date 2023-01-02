import { Specie } from '../entities';

export interface FetchPokemonSpecie {
  execute(id: string | number): Promise<Specie | null>;
}
