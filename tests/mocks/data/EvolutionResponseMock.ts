import { faker } from '@faker-js/faker';
import { EvolutionResponse } from '@/data/models';

export const makeEvolutionResponseMock = (): EvolutionResponse => {
  return {
    chain: {
      species: {
        name: faker.name.firstName(),
      },
      evolution_details: [
        {
          min_level: faker.datatype.number(),
        },
      ],
      evolves_to: [
        {
          species: {
            name: faker.name.firstName(),
          },
          evolution_details: [
            {
              min_level: faker.datatype.number(),
            },
          ],
          evolves_to: [],
        },
      ],
    },
  };
};
