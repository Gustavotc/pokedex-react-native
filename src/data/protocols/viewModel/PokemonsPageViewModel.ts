import { Pokemon } from '@/domain/entities';

export type PokemonsPageViewModel = {
  useViewModel(): {
    pokemons: Pokemon[];
    error: string | null;
    fetchPokemons: () => Promise<void>;
  };
};
