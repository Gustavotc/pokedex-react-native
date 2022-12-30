import { SearchPokemonImpl } from '@/data/usecases';
import { makePokemonRepository } from '../repositories/PokemonRepositoryFactory';

export const makeSearchPokemon = () => {
  return new SearchPokemonImpl(makePokemonRepository());
};
