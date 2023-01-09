import { Evolution, Pokemon } from '@/domain/entities';

export type PokemonDetailsPageViewModel = {
  useViewModel(): {
    pokemon: Pokemon | null;
    loading: boolean;
    selectedPage: 'About' | 'Stats' | 'Evolution';
    evolutions: Evolution[];
    init: (id: string | number) => Promise<void>;
    getPokemonAbilities: () => string;
    setSelectedPage: (page: 'About' | 'Stats' | 'Evolution') => void;
    fetchPokemonEvolutions: () => void;
  };
};
