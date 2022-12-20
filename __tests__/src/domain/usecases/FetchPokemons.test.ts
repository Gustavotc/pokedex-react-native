import { mock } from "jest-mock-extended";
import FetchPokemonsImpl from "../../../../src/data/usecases/FetchPokemonsImpl";
import { PokemonRepository } from "../../../../src/domain/repository";
import { makePokemonMock } from "../../../mocks/entities/PokemonMock";

const makeSut = () => {
  const repositoryMock = mock<PokemonRepository>();
  const sut = new FetchPokemonsImpl(repositoryMock);
  return {
    sut,
    repositoryMock,
  };
};

describe("Fetch Pokemon usecase", () => {
  it("Should return an array of Pokemons", async () => {
    const { sut, repositoryMock } = makeSut();
    const pokemonsMock = [
      makePokemonMock(),
      makePokemonMock(),
      makePokemonMock(),
    ];

    repositoryMock.get.mockResolvedValueOnce(pokemonsMock);

    const response = await sut.execute();

    expect(response).toBe(pokemonsMock);
    expect(response.length).toBe(3);
  });
});
