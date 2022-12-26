import React from 'react';
import PokemonsPage from '@/presentation/pages/pokemonsPage/PokemonsPage';
import { makePokemonsPageViewModel } from '../viewModels/PokemonsPageViewModelFactory';

export const makePokemonsPage = () => {
  return <PokemonsPage viewModel={makePokemonsPageViewModel()} />;
};
