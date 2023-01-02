import { Pokemon } from '@/domain/entities';

export type PokemonDetailsPageViewModel = {
  useViewModel(): {
    pokemon: Pokemon | null;
    loading: boolean;
    init: (id: string | number) => Promise<void>;
  };
};
