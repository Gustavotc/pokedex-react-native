import PokemonsPageViewModelImpl from '@/presentation/pages/pokemonsPage/PokemonsPageViewModelImpl';
import { makeFetchPokemons } from '../usecases';

export const makePokemonsPageViewModel = () => {
  return new PokemonsPageViewModelImpl(makeFetchPokemons());
};
