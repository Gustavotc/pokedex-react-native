import { mock } from 'jest-mock-extended';
import { SpecieRepository } from '@/data/protocols/repository';
import { FetchPokemonSpecieImpl } from '@/data/usecases';
import { makeEspecieMock } from '@/../tests/mocks/entities/SpecieMock';
import { DataSourceError } from '@/domain/errors/DataSourceError';

const makeSut = () => {
  const specieRepositoryMock = mock<SpecieRepository>();
  const sut = new FetchPokemonSpecieImpl(specieRepositoryMock);
  return {
    sut,
    specieRepositoryMock,
  };
};
describe('Fetch Pokemon Specie usecase', () => {
  it('Should return Pokemon Evolutions on success', async () => {
    const { sut, specieRepositoryMock } = makeSut();

    const specieMock = makeEspecieMock();

    specieRepositoryMock.get.mockResolvedValueOnce(specieMock);

    const specie = await sut.execute(1);

    expect(specie).toBe(specieMock);
  });

  it('Should return null if Evolution was not found', async () => {
    const { sut, specieRepositoryMock } = makeSut();

    specieRepositoryMock.get.mockResolvedValueOnce(null);

    const specie = await sut.execute(1);

    expect(specie).toBeNull();
  });

  it('Should throw a DataSourceError if repository fails', async () => {
    const { sut, specieRepositoryMock } = makeSut();

    specieRepositoryMock.get.mockRejectedValueOnce(new DataSourceError());

    await expect(sut.execute(1)).rejects.toBeInstanceOf(DataSourceError);
  });
});
