import { PokemonsPageViewModel } from '@/presentation/viewModel';
import { MakePokemonsPage } from '@/main/factories/pages/PokemonsPageFactory';
import PokemonsPage from '@/presentation/pages/pokemonsPage/PokemonsPage';

describe('PokemonsPageFactory', () => {
  it('Should instantiate PokemonsPage correctly', () => {
    const page = MakePokemonsPage();
    expect(page.type).toEqual(PokemonsPage);
    expect(page.props.viewModel).toMatchObject<PokemonsPageViewModel>(
      page.props.viewModel,
    );
  });
});
