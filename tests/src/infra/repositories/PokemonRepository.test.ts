import { mock } from 'jest-mock-extended';
import { DataSourceError } from '@/domain/errors/DataSourceError';
import { PokemonMapper } from '@/infra/mappers';
import { HttpClient } from '@/data/protocols/http';
import { PokemonRepositoryImpl } from '@/infra/repositories';
import { makePokemonResponseMock } from '@/tests/mocks/data/PokemonResponseMock';
import { makePokemonsResponseMock } from '@/tests/mocks/data/PokemonsResponseMock';

const makeSut = () => {
  const httpClientMock = mock<HttpClient>();
  const pokemonMapper = new PokemonMapper();
  const sut = new PokemonRepositoryImpl(httpClientMock, pokemonMapper);

  return {
    sut,
    httpClientMock,
    pokemonMapper,
  };
};

describe('Pokemon repository: get', () => {
  it('Should return an array of PokemonsResponse', async () => {
    const { sut, httpClientMock } = makeSut();

    const pokemonsResponseMock = makePokemonsResponseMock();

    const responseMock = {
      statusCode: 200,
      body: pokemonsResponseMock,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    const response = await sut.get(0);

    expect(response.length).toBe(10);
    expect(response).toEqual(pokemonsResponseMock.results);
  });

  it('Should return an empty array when status code is 200 but body is not a list', async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 200,
      body: { results: [] },
    });

    const response = await sut.get(0);

    expect(response).toStrictEqual([]);
  });

  it('Should throw an DataSourceError if status code is not 200', async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 500,
      body: null,
    });

    await expect(sut.get(0)).rejects.toBeInstanceOf(DataSourceError);
  });
});

describe('Pokemon repository: getById', () => {
  it('Should return all data about a specific pokemon on getById success', async () => {
    const { sut, httpClientMock, pokemonMapper } = makeSut();

    const responseMock = makePokemonResponseMock();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 200,
      body: responseMock,
    });

    const response = await sut.getById(1);

    expect(response).toStrictEqual(pokemonMapper.toDomain(responseMock));
  });

  it('Should return null if getById returns 404', async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 404,
      body: 'Not found',
    });

    const response = await sut.getById(1);

    expect(response).toBeNull();
  });

  it('Should throw an DataSourceError if status code is unknown', async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 500,
      body: null,
    });

    await expect(sut.getById(1)).rejects.toBeInstanceOf(DataSourceError);
  });
});
