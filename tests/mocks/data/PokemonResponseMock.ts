import { faker } from '@faker-js/faker';
import { PokemonResponse } from '@/data/models';
import { makePokemonTypeMock } from '../entities/PokemonTypeMock';

export const makePokemonResponseMock = (): PokemonResponse => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    height: faker.datatype.number({ precision: 0.01 }),
    weight: faker.datatype.number({ precision: 0.01 }),
    sprites: {
      other: {
        dream_world: {
          front_default: faker.image.imageUrl(),
        },
        'official-artwork': {
          front_default: faker.image.imageUrl(),
        },
      },
    },
    stats: [
      {
        base_stat: faker.datatype.number(),
        effort: faker.datatype.number(),
        stat: {
          name: faker.word.adjective(),
          url: faker.internet.url(),
        },
      },
    ],
    types: [
      {
        slot: faker.datatype.number(),
        type: {
          name: makePokemonTypeMock(),
          url: faker.internet.url(),
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: faker.name.firstName(),
        },
        is_hidden: faker.datatype.boolean(),
      },
      {
        ability: {
          name: faker.name.firstName(),
        },
        is_hidden: faker.datatype.boolean(),
      },
    ],
  };
};
