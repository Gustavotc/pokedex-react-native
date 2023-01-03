import { PokemonType } from '@/domain/entities';

export type PokemonStatsJson = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}[];

export type PokemonTypesJson = {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}[];

export type PokemonAbilitiesJson = {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}[];

export type PokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string | null;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: PokemonStatsJson;
  types: PokemonTypesJson;
  abilities: PokemonAbilitiesJson;
};
