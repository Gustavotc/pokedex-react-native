import { faker } from "@faker-js/faker";
import { PokemonResponse } from "@/data/models";

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
      },
    },
    stats: [
      {
        base_state: faker.datatype.number(),
        stat: {
          name: faker.word.adjective(),
        },
      },
    ],
  };
};
