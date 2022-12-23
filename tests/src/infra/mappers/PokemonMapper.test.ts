import { makePokemonResponseMock } from '@/../tests/mocks/data/PokemonResponseMock';
import { PokemonMapper } from '@/infra/mappers';
import { Pokemon } from '@/domain/entities';

const makeSut = () => {
  return {
    sut: new PokemonMapper(),
  };
};

describe('PokemonMapper', () => {
  it('Should return a Pokemon object from a PokemonResponse json', () => {
    const { sut } = makeSut();

    const pokemonJsonMock = makePokemonResponseMock();
    const pokemon: Pokemon = sut.toDomain(pokemonJsonMock);

    expect(pokemon).toMatchObject<Pokemon>(pokemon);
  });
});
