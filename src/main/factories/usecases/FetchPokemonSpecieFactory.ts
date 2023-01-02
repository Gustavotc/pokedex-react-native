import { FetchPokemonSpecieImpl } from '@/data/usecases';
import { makeSpecieRepository } from '../repositories';

export const makeFetchPokemonSpecie = () => {
  return new FetchPokemonSpecieImpl(makeSpecieRepository());
};
