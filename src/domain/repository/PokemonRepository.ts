import { Pokemon } from "../entities";

export type PokemonRepository = {
  get: () => Promise<Pokemon[]>;
};
