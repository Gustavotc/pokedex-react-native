import { Pokemon } from '@/domain/entities';

export type PokemonsPageViewModel = {
  useViewModel(): {
    pokemons: Pokemon[];
    error: string | null;
    loading: boolean;
    fetchPokemons: () => Promise<void>;
  };
};
