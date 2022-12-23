import { PokemonRepository } from '@/data/protocols/repository';
import { makePokemonRepository } from '@/main/factories/repositories';

describe('PokemonRepositoryFactory', () => {
  it('Should instantiate a PokemonRepository correctly', () => {
    const repository = makePokemonRepository();
    expect(repository).toMatchObject<PokemonRepository>(repository);
  });
});
