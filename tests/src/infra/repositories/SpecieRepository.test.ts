import { mock } from 'jest-mock-extended';
import { HttpClient } from '@/data/protocols/http';
import { SpecieMapper } from '@/infra/mappers';
import { SpecieRepositoryImpl } from '@/infra/repositories';
import { makeSpecieResponseMock } from '@/../tests/mocks/data/SpecieResponseMock';
import { DataSourceError } from '@/domain/errors/DataSourceError';

const makeSut = () => {
  const httpClientMock = mock<HttpClient>();
  const specieMapper = new SpecieMapper();
  const sut = new SpecieRepositoryImpl(httpClientMock, specieMapper);
  return {
    sut,
    httpClientMock,
    specieMapper,
  };
};

describe('Specie Repository', () => {
  it('Should fetch pokemon species with success', async () => {
    const { sut, httpClientMock, specieMapper } = makeSut();
    const specieResponseMock = makeSpecieResponseMock();

    const responseMock = {
      statusCode: 200,
      body: specieResponseMock,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    const specie = await sut.get(1);

    const specieObject = specieMapper.toDomain(specieResponseMock);

    expect(specie).not.toBe(specieObject);
  });

  it('Should return null if specie is not found, statusCode 404', async () => {
    const { sut, httpClientMock } = makeSut();

    const responseMock = {
      statusCode: 404,
      body: null,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    const specie = await sut.get(1);

    expect(specie).toBeNull();
  });

  it('Should throw a DataSourceError if fetch specie request fails', async () => {
    const { sut, httpClientMock } = makeSut();

    const responseMock = {
      statusCode: 0,
      body: null,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    await expect(sut.get(1)).rejects.toBeInstanceOf(DataSourceError);
  });
});
