import { EvolutionMapper } from '@/infra/mappers';
import { EvolutionRepositoryImpl } from '@/infra/repositories';
import { makeAxiosHttpClient } from '../http';

export const makeEvolutionRepository = () => {
  return new EvolutionRepositoryImpl(
    makeAxiosHttpClient(),
    new EvolutionMapper(),
  );
};
