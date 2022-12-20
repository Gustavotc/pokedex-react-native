import { Pokemon } from "../entities";

export interface FetchPokemons {
  execute: () => Promise<Pokemon[]>;
}
