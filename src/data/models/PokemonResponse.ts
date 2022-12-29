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
    name: string;
    url: string;
  };
}[];

export type PokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: PokemonStatsJson;
  types: PokemonTypesJson;
};
