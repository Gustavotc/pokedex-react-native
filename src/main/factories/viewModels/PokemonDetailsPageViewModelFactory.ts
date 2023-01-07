import PokemonDetailsPageViewModelImpl from '@/presentation/pages/pokemonDetailsPage/PokemonDetailsPageViewModelImpl';
import { makeFetchPokemonSpecie, makeSearchPokemon } from '../usecases';
import { makeFetchEvolution } from '../usecases/FetchEvolutionFactory';

export const makePokemonDetailsPageViewModel = () => {
  return new PokemonDetailsPageViewModelImpl(
    makeSearchPokemon(),
    makeFetchPokemonSpecie(),
    makeFetchEvolution(),
  );
};
