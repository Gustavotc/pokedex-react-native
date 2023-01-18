import { faker } from '@faker-js/faker';
import { SpecieResponse } from '@/data/models';

export const makeSpecieResponseMock = (): SpecieResponse => {
  return {
    color: { name: faker.color.human() },
    evolution_chain: {
      url: `https://pokeapi.co/api/v2/evolution-chain/${faker.datatype.number()}`,
    },
    habitat: { name: faker.datatype.string() },
    flavor_text_entries: [
      {
        flavor_text: faker.lorem.paragraph(),
        language: { name: 'en' },
        version: { name: faker.datatype.string() },
      },
    ],
    genera: [
      {
        genus: faker.datatype.string(),
        language: { name: 'en' },
      },
    ],
  };
};
