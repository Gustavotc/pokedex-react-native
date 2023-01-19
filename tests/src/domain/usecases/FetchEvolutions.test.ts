import { mock } from 'jest-mock-extended';
import {
  EvolutionRepository,
  PokemonRepository,
} from '@/data/protocols/repository';
import { FetchEvolutionsImpl } from '@/data/usecases';
import { makeEvolutionMock } from '@/../tests/mocks/entities/EvolutionMock';
import { makePokemonMock } from '@/../tests/mocks/entities/PokemonMock';
import { DataSourceError } from '@/domain/errors/DataSourceError';

const makeSut = () => {
  const evolutionRepositoryMock = mock<EvolutionRepository>();
  const pokemonRepositoryMock = mock<PokemonRepository>();
  const sut = new FetchEvolutionsImpl(
    evolutionRepositoryMock,
    pokemonRepositoryMock,
  );
  return {
    sut,
    evolutionRepositoryMock,
    pokemonRepositoryMock,
  };
};

describe('Fetch Evolutions usecase', () => {
  it('Should return pokemon evolutions on success', async () => {
    const { sut, evolutionRepositoryMock, pokemonRepositoryMock } = makeSut();

    const evolutionsMock = [makeEvolutionMock(), makeEvolutionMock()];

    evolutionRepositoryMock.getEvolutions.mockResolvedValueOnce(evolutionsMock);

    pokemonRepositoryMock.getById.mockResolvedValue(makePokemonMock());

    const evolutions = await sut.execute(1);

    expect(evolutions.length).toBe(2);
    expect(evolutions[0].imageUrl).not.toBeNull();
    expect(evolutions[1].imageUrl).not.toBeNull();
  });

  it('Should return an empty array if not evolution was found', async () => {
    const { sut, evolutionRepositoryMock } = makeSut();

    evolutionRepositoryMock.getEvolutions.mockResolvedValueOnce([]);

    const evolutions = await sut.execute(1);

    expect(evolutions.length).toBe(0);
    expect(evolutions).toStrictEqual([]);
  });

  it('Should throw a DataSourceError if repository fails', async () => {
    const { sut, evolutionRepositoryMock } = makeSut();

    evolutionRepositoryMock.getEvolutions.mockRejectedValueOnce(
      new DataSourceError(),
    );

    await expect(sut.execute(1)).rejects.toBeInstanceOf(DataSourceError);
  });
});
