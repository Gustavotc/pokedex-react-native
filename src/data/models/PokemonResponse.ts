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
  stats: [
    {
      base_state: number;
      stat: {
        name: string;
      };
    }
  ];
};
