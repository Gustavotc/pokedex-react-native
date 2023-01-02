import { SpecieMapper } from '@/infra/mappers';
import { SpecieRepositoryImpl } from '@/infra/repositories';
import { makeAxiosHttpClient } from '../http';

export const makeSpecieRepository = () => {
  return new SpecieRepositoryImpl(makeAxiosHttpClient(), new SpecieMapper());
};
