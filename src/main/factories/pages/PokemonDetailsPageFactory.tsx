import React from 'react';
import PokemonDetailsPage from '@/presentation/pages/pokemonDetailsPage/PokemonDetailsPage';
import { makePokemonDetailsPageViewModel } from '../viewModels/PokemonDetailsPageViewModelFactory';

export const MakePokemonDetailsPage = () => {
  return <PokemonDetailsPage viewModel={makePokemonDetailsPageViewModel()} />;
};
