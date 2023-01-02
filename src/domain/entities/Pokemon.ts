import { PokemonType, Specie } from '.';

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  stats: { name: string; baseStat: number }[];
  types: PokemonType[];
  specie: Specie | null;
};
