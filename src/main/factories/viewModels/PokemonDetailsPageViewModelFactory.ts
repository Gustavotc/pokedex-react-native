import PokemonDetailsPageViewModelImpl from '@/presentation/pages/pokemonDetailsPage/PokemonDetailsPageViewModelImpl';
import { makeFetchPokemonSpecie, makeSearchPokemon } from '../usecases';

export const makePokemonDetailsPageViewModel = () => {
  return new PokemonDetailsPageViewModelImpl(
    makeSearchPokemon(),
    makeFetchPokemonSpecie(),
  );
};
