import { PokemonMapper } from '@/infra/mappers';
import { PokemonRepositoryImpl } from '@/infra/repositories';
import { makeAxiosHttpClient } from '../http/AxiosHttpClientFactory';

export const makePokemonRepository = () => {
  return new PokemonRepositoryImpl(makeAxiosHttpClient(), new PokemonMapper());
};
