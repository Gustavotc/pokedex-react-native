import { PokemonsPageViewModel } from '@/presentation/viewModel';
import { makePokemonsPageViewModel } from '@/main/factories/viewModels/PokemonsPageViewModelFactory';

describe('PokemonsPageViewModelFactory', () => {
  it('Should instantiate PokemonsPageViewModel correctly', () => {
    const viewModel = makePokemonsPageViewModel();
    expect(viewModel).toMatchObject<PokemonsPageViewModel>(viewModel);
  });
});
