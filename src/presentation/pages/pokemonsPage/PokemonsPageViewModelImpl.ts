import { useState } from 'react';
import { Pokemon } from '@/domain/entities';
import { PokemonsPageViewModel } from '@/data/protocols/viewModel';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';
import { DataSourceError } from '@/domain/errors/DataSourceError';

export default class PokemonsPageViewModelImpl
  implements PokemonsPageViewModel
{
  constructor(private readonly fetchPokemons: FetchPokemons) {}

  useViewModel() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchPokemons = async () => {
      setLoading(true);
      this.fetchPokemons
        .execute(pokemons.length)
        .then(pokemonsResponse => {
          const newPokemons = pokemons.concat(pokemonsResponse);
          setPokemons(newPokemons);
        })
        .catch(exception => {
          if (exception instanceof DataSourceError) {
            setError(exception.message);
          } else {
            setError('Something went wrong, please try again');
          }
        })
        .finally(() => setLoading(false));
    };

    return {
      pokemons,
      error,
      loading,
      fetchPokemons,
    };
  }
}
