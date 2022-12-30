import PokemonsPageViewModelImpl from '@/presentation/pages/pokemonsPage/PokemonsPageViewModelImpl';
import { makeFetchPokemons, makeSearchPokemon } from '../usecases';

export const makePokemonsPageViewModel = () => {
  return new PokemonsPageViewModelImpl(
    makeFetchPokemons(),
    makeSearchPokemon(),
  );
};
