import { PokemonsResponse } from '@/data/models';
import { Pokemon } from '@/domain/entities';

export type PokemonRepository = {
  get: (offset: number) => Promise<PokemonsResponse[]>;
  getById: (id: number | string) => Promise<Pokemon | null>;
};
