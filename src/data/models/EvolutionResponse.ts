type EvolutionChainLink = {
  species: {
    name: string;
  };
  evolves_to: EvolutionChainLink[];
  evolution_details: {
    min_level: number;
  }[];
};

export type EvolutionResponse = {
  chain: EvolutionChainLink;
};
