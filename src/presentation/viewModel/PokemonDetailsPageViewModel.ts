import { Pokemon } from '@/domain/entities';

export type PokemonDetailsPageViewModel = {
  useViewModel(): {
    pokemon: Pokemon | null;
    loading: boolean;
    selectedPage: 'About' | 'Stats' | 'Evolution';
    init: (id: string | number) => Promise<void>;
    getPokemonAbilities: () => string;
    setSelectedPage: (page: 'About' | 'Stats' | 'Evolution') => void;
  };
};
