import { mock } from 'jest-mock-extended';
import { PokemonRepository } from '@/data/protocols/repository';
import { SearchPokemonImpl } from '@/data/usecases';
import { makePokemonMock } from '@/../tests/mocks/entities/PokemonMock';

const makeSut = () => {
  const repositoryMock = mock<PokemonRepository>();
  const sut = new SearchPokemonImpl(repositoryMock);
  return {
    sut,
    repositoryMock,
  };
};

describe('SearchPokemon usecase', () => {
  it('Should return a pokemon on search success', async () => {
    const { sut, repositoryMock } = makeSut();

    const pokemonMock = makePokemonMock();
    const spy = jest.spyOn(repositoryMock, 'getById');
    repositoryMock.getById.mockResolvedValueOnce(pokemonMock);

    const response = await sut.execute('Pikachu');

    expect(spy).toHaveBeenCalledWith('Pikachu');
    expect(response).toBe(pokemonMock);
  });

  it('Should return null if no pokemon is found', async () => {
    const { sut, repositoryMock } = makeSut();

    repositoryMock.getById.mockResolvedValueOnce(null);

    const response = await sut.execute('Poke');

    expect(response).toBeNull();
  });
});
