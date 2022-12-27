import { mock } from 'jest-mock-extended';
import { renderHook, act } from '@testing-library/react-native';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';
import PokemonsPageViewModelImpl from '@/presentation/pages/pokemonsPage/PokemonsPageViewModelImpl';
import { makePokemonMock } from '@/tests/mocks/entities/PokemonMock';

const makeSut = () => {
  const fetchPokemonsMock = mock<FetchPokemons>();
  const sut = new PokemonsPageViewModelImpl(fetchPokemonsMock);
  return {
    sut,
    fetchPokemonsMock,
  };
};

describe('PokemonsPageViewModel', () => {
  it('Should instantiate correctly', () => {
    const { sut } = makeSut();

    const hookMock = renderHook(() => sut.useViewModel());

    const { pokemons, error } = hookMock.result.current;

    expect(pokemons).toStrictEqual([]);
    expect(error).toBe(null);
  });

  it('Should fetch pokemons and update pokemons array', async () => {
    const { sut, fetchPokemonsMock } = makeSut();

    fetchPokemonsMock.execute.mockResolvedValueOnce([
      makePokemonMock(),
      makePokemonMock(),
      makePokemonMock(),
    ]);

    const hookMock = renderHook(() => sut.useViewModel());

    const { fetchPokemons } = hookMock.result.current;

    await act(async () => {
      await fetchPokemons();
    });

    expect(hookMock.result.current.pokemons.length).toBe(3);
    expect(hookMock.result.current.error).toBe(null);
  });

  it('Should set error message when pokemons fetch fails', async () => {
    const { sut, fetchPokemonsMock } = makeSut();

    fetchPokemonsMock.execute.mockRejectedValueOnce(null);

    const hookMock = renderHook(() => sut.useViewModel());

    const { fetchPokemons } = hookMock.result.current;

    await act(async () => {
      await fetchPokemons();
    });

    expect(hookMock.result.current.pokemons).toStrictEqual([]);
    expect(hookMock.result.current.error).toBe(
      'Something went wrong, please try again',
    );
  });
});
