import { faker } from '@faker-js/faker';
import { Pokemon } from '../../../src/domain/entities';

export const makePokemonMock = (): Pokemon => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    imageUrl: faker.image.imageUrl(),
    height: faker.datatype.number(),
    weight: faker.datatype.number(),
    stats: faker.word.adjective(),
  };
};
