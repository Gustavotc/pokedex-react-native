import { faker } from '@faker-js/faker';
import { Evolution } from '@/domain/entities';

export const makeEvolutionMock = (): Evolution => {
  return {
    name: faker.name.firstName(),
    imageUrl: faker.internet.url(),
    minLevel: faker.datatype.number(),
  };
};
