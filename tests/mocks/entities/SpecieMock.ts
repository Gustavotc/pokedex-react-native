import { faker } from '@faker-js/faker';
import { Specie } from '@/domain/entities';

export const makeEspecieMock = (): Specie => {
  return {
    color: faker.color.human(),
    description: faker.datatype.string(),
    evolutionId: faker.datatype.number(),
    habitat: faker.datatype.string(),
    specie: faker.datatype.string(),
  };
};
