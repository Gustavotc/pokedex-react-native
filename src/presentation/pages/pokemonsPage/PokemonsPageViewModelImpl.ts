import { useState } from 'react';
import { Pokemon } from '@/domain/entities';
import { PokemonsPageViewModel } from '@/data/protocols/viewModel';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';

export default class PokemonsPageViewModelImpl
  implements PokemonsPageViewModel
{
  constructor(private readonly fetchPokemons: FetchPokemons) {}

  useViewModel() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchPokemons = async () => {
      return this.fetchPokemons
        .execute()
        .then(pokemonsResponse => {
          const newPokemons = pokemons.concat(pokemons, pokemonsResponse);
          setPokemons(newPokemons);
        })
        .catch(exception => {
          console.log(exception);
        });
    };

    return {
      pokemons,
      error,
      fetchPokemons,
    };
  }
}
