import { FetchPokemons } from '@/domain/usecases/FetchPokemons';
import { makeFetchPokemons } from '@/main/factories/usecases';

describe('FetchPokemonsFactory', () => {
  it('Should instantiate FetchPokemons usecase correctly', () => {
    const usecase = makeFetchPokemons();
    expect(usecase).toMatchObject<FetchPokemons>(usecase);
  });
});
