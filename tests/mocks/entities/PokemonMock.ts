import { faker } from '@faker-js/faker';
import { Pokemon } from '../../../src/domain/entities';
import { makePokemonTypeMock } from './PokemonTypeMock';
import { makeEspecieMock } from './SpecieMock';

export const makePokemonMock = (): Pokemon => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    imageUrl: faker.image.imageUrl(),
    height: faker.datatype.number(),
    weight: faker.datatype.number(),
    stats: [
      {
        baseStat: faker.datatype.number(),
        name: faker.word.adjective(),
      },
    ],
    types: [makePokemonTypeMock(), makePokemonTypeMock()],
    specie: makeEspecieMock(),
    abilities: [
      { name: faker.name.firstName(), isHidden: faker.datatype.boolean() },
      { name: faker.name.firstName(), isHidden: faker.datatype.boolean() },
    ],
  };
};
