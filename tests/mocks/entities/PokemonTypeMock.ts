import { faker } from '@faker-js/faker';
import { PokemonType } from '@/domain/entities';

export const makePokemonTypeMock = (): PokemonType => {
  return faker.helpers.arrayElement([
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ]);
};
