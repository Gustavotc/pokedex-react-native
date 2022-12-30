import { RefObject } from 'react';
import { TextInput } from 'react-native';
import { Pokemon } from '@/domain/entities';

export type PokemonsPageViewModel = {
  useViewModel(): {
    pokemons: Pokemon[];
    error: string | null;
    loading: boolean;
    searchResult: Pokemon | null;
    searchInputRef: RefObject<TextInput>;
    isSearching: boolean;
    fetchPokemons: () => Promise<void>;
    handleSearchTextChange: (text: string) => void;
    handleClearSearch: () => void;
  };
};
