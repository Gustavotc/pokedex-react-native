import { DataSourceError } from "@/domain/errors/DataSourceError";
import { PokemonMapper } from "@/infra/mappers";
import { HttpClient } from "@/data/protocols/http";
import { PokemonRepositoryImpl } from "@/infra/repositories";
import { mock } from "jest-mock-extended";
import { makePokemonResponseMock } from "@/tests/mocks/data/PokemonResponseMock";

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

describe("Pokemon repository", () => {
  it("Should return an array of Pokemons", async () => {
    const { sut, httpClientMock, pokemonMapper } = makeSut();

    const pokemonsResponseMock = [
      makePokemonResponseMock(),
      makePokemonResponseMock(),
      makePokemonResponseMock(),
    ];

    const responseMock = {
      statusCode: 200,
      body: pokemonsResponseMock,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    const response = await sut.get();

    const mappedPokemonsMock = pokemonsResponseMock.map((pokemonJsonMock) =>
      pokemonMapper.toDomain(pokemonJsonMock)
    );

    expect(response.length).toBe(3);
    expect(response).toStrictEqual(mappedPokemonsMock);
  });

  it("Should return an empty array when status code is 200 but body is not a list", async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 200,
      body: null,
    });

    const response = await sut.get();

    expect(response).toStrictEqual([]);
  });

  it("Should return an empty array if status code is not 200", async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockResolvedValueOnce({
      statusCode: 500,
      body: null,
    });

    const response = await sut.get();

    expect(response).toStrictEqual([]);
  });

  it("Should throw an DataSourceError if httpClient fails", async () => {
    const { sut, httpClientMock } = makeSut();

    httpClientMock.request.mockRejectedValueOnce(null);

    await expect(sut.get()).rejects.toBeInstanceOf(DataSourceError);
  });
});
