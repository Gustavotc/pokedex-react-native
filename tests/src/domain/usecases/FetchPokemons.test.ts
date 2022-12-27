import { mock } from 'jest-mock-extended';
import { PokemonRepository } from '@/data/protocols/repository';
import FetchPokemonsImpl from '@/data/usecases/FetchPokemonsImpl';
import { makePokemonMock } from '@/tests/mocks/entities/PokemonMock';
import { makePokemonsResponseMock } from '@/../tests/mocks/data/PokemonsResponseMock';

const makeSut = () => {
  const repositoryMock = mock<PokemonRepository>();
  const sut = new FetchPokemonsImpl(repositoryMock);
  return {
    sut,
    repositoryMock,
  };
};

describe('Fetch Pokemon usecase', () => {
  it('Should return an array of Pokemons', async () => {
    const { sut, repositoryMock } = makeSut();

    repositoryMock.get.mockResolvedValueOnce(
      makePokemonsResponseMock().results,
    );

    repositoryMock.getById.mockResolvedValue(makePokemonMock());

    const response = await sut.execute();

    expect(response.length).toBe(10);
  });
});
