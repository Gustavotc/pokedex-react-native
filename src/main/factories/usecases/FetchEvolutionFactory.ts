import { FetchEvolutionsImpl } from '@/data/usecases';
import { makeEvolutionRepository } from '../repositories';

export const makeFetchEvolution = () => {
  return new FetchEvolutionsImpl(makeEvolutionRepository());
};
