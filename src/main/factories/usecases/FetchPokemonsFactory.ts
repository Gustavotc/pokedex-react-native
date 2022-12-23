import FetchPokemonsImpl from '@/data/usecases/FetchPokemonsImpl';
import { makePokemonRepository } from '../repositories/PokemonRepositoryFactory';

export const makeFetchPokemons = () => {
  return new FetchPokemonsImpl(makePokemonRepository());
};
