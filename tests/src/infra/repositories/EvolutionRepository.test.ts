import { mock } from 'jest-mock-extended';
import { HttpClient } from '@/data/protocols/http';
import { EvolutionMapper } from '@/infra/mappers';
import { EvolutionRepositoryImpl } from '@/infra/repositories';
import { makeEvolutionResponseMock } from '@/../tests/mocks/data/EvolutionResponseMock';
import { DataSourceError } from '@/domain/errors/DataSourceError';

const makeSut = () => {
  const httpClientMock = mock<HttpClient>();
  const evolutionMapper = new EvolutionMapper();
  const sut = new EvolutionRepositoryImpl(httpClientMock, evolutionMapper);
  return {
    sut,
    httpClientMock,
    evolutionMapper,
  };
};

describe('Evolution Repository', () => {
  it('Should return pokemon evolutions on success', async () => {
    const { sut, httpClientMock, evolutionMapper } = makeSut();

    const evolutionResponseMock = makeEvolutionResponseMock();

    const httpResponseMock = {
      statusCode: 200,
      body: evolutionResponseMock,
    };

    httpClientMock.request.mockResolvedValueOnce(httpResponseMock);

    const response = await sut.getEvolutions(1);

    const evolutionObject = evolutionMapper.toDomain(evolutionResponseMock);

    expect(response).toStrictEqual(evolutionObject);
  });

  it('Should return an empty array if getEvolutions statusCode is 200 but body is null', async () => {
    const { sut, httpClientMock } = makeSut();

    const httpResponseMock = {
      statusCode: 200,
      body: null,
    };

    httpClientMock.request.mockResolvedValueOnce(httpResponseMock);

    const response = await sut.getEvolutions(1);

    expect(response).toStrictEqual([]);
  });

  it('Should throw a DataSourceError if getEvolutions statusCode is not 200', async () => {
    const { sut, httpClientMock } = makeSut();

    const httpResponseMock = {
      statusCode: 0,
      body: null,
    };

    httpClientMock.request.mockResolvedValueOnce(httpResponseMock);

    await expect(sut.getEvolutions(1)).rejects.toBeInstanceOf(DataSourceError);
  });
});
