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
    const [selectedPage, setSelectedPage] = useState<
      'About' | 'Stats' | 'Evolution'
    >('About');

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

    const getPokemonAbilities = () => {
      if (!pokemon?.abilities) return '';

      let abilities = '';
      pokemon.abilities.forEach((ability, index) => {
        let abilityText = ability.name;
        if (ability.isHidden) abilityText += ' (hidden)';
        const separator = index === pokemon.abilities.length - 1 ? '' : ',';
        abilities = abilities.concat(`${abilityText}${separator} `);
      });
      return abilities;
    };

    return {
      pokemon,
      loading,
      selectedPage,
      init,
      getPokemonAbilities,
      setSelectedPage,
    };
  }
}