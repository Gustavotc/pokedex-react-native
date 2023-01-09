import { FetchEvolutionsImpl } from '@/data/usecases';
import {
  makeEvolutionRepository,
  makePokemonRepository,
} from '../repositories';

export const makeFetchEvolution = () => {
  return new FetchEvolutionsImpl(
    makeEvolutionRepository(),
    makePokemonRepository(),
  );
};
