import { useState } from 'react';
import Toast from 'react-native-root-toast';
import { Pokemon } from '@/domain/entities';
import { PokemonDetailsPageViewModel } from '@/presentation/viewModel';
import { FetchPokemonSpecie, SearchPokemon } from '@/domain/usecases';
import { DataSourceError } from '@/domain/errors/DataSourceError';

export default class PokemonDetailsPageViewModelImpl
  implements PokemonDetailsPageViewModel
{
  constructor(
    private readonly searchPokemon: SearchPokemon,
    private readonly fetchPokemonSpecie: FetchPokemonSpecie,
  ) {}

  useViewModel() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);

    const init = async (id: string | number) => {
      try {
        setLoading(true);
        const pokemonResponse = await this.searchPokemon.execute(id);
        const pokemonSpecie = await this.fetchPokemonSpecie.execute(id);

        if (pokemonResponse) {
          pokemonResponse.specie = pokemonSpecie;
          setPokemon(pokemonResponse);
        }
      } catch (error) {
        if (error instanceof DataSourceError) Toast.show(error.message);
        Toast.show('Pokemon data fetch failed, please try again!');
      } finally {
        setLoading(false);
      }
    };

    return {
      pokemon,
      loading,
      init,
    };
  }
}
