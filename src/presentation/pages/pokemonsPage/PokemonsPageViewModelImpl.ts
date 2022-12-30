import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Pokemon } from '@/domain/entities';
import { PokemonsPageViewModel } from '@/presentation/viewModel';
import { FetchPokemons, SearchPokemon } from '@/domain/usecases';
import { DataSourceError } from '@/domain/errors/DataSourceError';

export default class PokemonsPageViewModelImpl
  implements PokemonsPageViewModel
{
  constructor(
    private readonly fetchPokemons: FetchPokemons,
    private readonly searchPokemon: SearchPokemon,
  ) {}

  useViewModel() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const searchResult = useRef<Pokemon | null>(null);
    const searchInputRef = useRef<TextInput | null>(null);

    const interval = useRef<NodeJS.Timer | null>(null);

    const handleException = (exception: any) => {
      if (exception instanceof DataSourceError) {
        setError(exception.message);
      } else {
        setError('Something went wrong, please try again');
      }
    };

    const fetchPokemons = async () => {
      setLoading(true);
      this.fetchPokemons
        .execute(pokemons.length)
        .then(pokemonsResponse => {
          const newPokemons = pokemons.concat(pokemonsResponse);
          setPokemons(newPokemons);
        })
        .catch(handleException)
        .finally(() => setLoading(false));
    };

    const handleSearchTextChange = (text: string) => {
      searchInputRef.current?.setNativeProps({ text });
      if (interval.current) {
        clearInterval(interval.current);
      }
      if (!text || text.length <= 0) {
        if (isSearching) setIsSearching(false);
        return;
      }

      interval.current = setTimeout(() => {
        if (searchResult.current) searchResult.current = null;
        if (!isSearching) setIsSearching(true);
        setLoading(true);
        this.searchPokemon
          .execute(text)
          .then(response => {
            if (response) searchResult.current = response;
          })
          .catch(handleException)
          .finally(() => setLoading(false));
        interval.current = null;
      }, 800);
    };

    const handleClearSearch = () => {
      searchResult.current = null;
      searchInputRef.current?.clear();
      if (interval.current) {
        clearInterval(interval.current);
      }
      setIsSearching(false);
    };

    return {
      pokemons,
      error,
      loading,
      searchResult: searchResult.current,
      searchInputRef,
      isSearching,
      handleClearSearch,
      fetchPokemons,
      handleSearchTextChange,
    };
  }
}
