import { Pokemon } from "@/domain/entities";

export type PokemonRepository = {
  get: () => Promise<Pokemon[]>;
};
