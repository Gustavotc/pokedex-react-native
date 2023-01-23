import { mock } from 'jest-mock-extended';
import { renderHook, act } from '@testing-library/react-native';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';
import PokemonsPageViewModelImpl from '@/presentation/pages/pokemonsPage/PokemonsPageViewModelImpl';
import { makePokemonMock } from '@/tests/mocks/entities/PokemonMock';
import { SearchPokemon } from '@/domain/usecases';
import { DataSourceError } from '@/domain/errors/DataSourceError';

const makeSut = () => {
  const fetchPokemonsMock = mock<FetchPokemons>();
  const searchPokemonsMock = mock<SearchPokemon>();
  const sut = new PokemonsPageViewModelImpl(
    fetchPokemonsMock,
    searchPokemonsMock,
  );
  return {
    sut,
    fetchPokemonsMock,
  };
};

describe('PokemonsPageViewModel', () => {
  it('Should instantiate correctly', () => {
    const { sut } = makeSut();

    const hookMock = renderHook(() => sut.useViewModel());

    const { pokemons, isSearching, searchResult } = hookMock.result.current;

    expect(pokemons).toStrictEqual([]);
    expect(isSearching).toBeFalsy();
    expect(searchResult).toBeNull();
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
  });

  it('Should show error message when pokemons fetch fails', async () => {
    const { sut, fetchPokemonsMock } = makeSut();

    fetchPokemonsMock.execute.mockRejectedValueOnce(new DataSourceError());

    const hookMock = renderHook(() => sut.useViewModel());

    const { fetchPokemons } = hookMock.result.current;

    await act(async () => {
      await fetchPokemons();
    });

    expect(hookMock.result.current.pokemons).toStrictEqual([]);
  });

  it('Should clear search value and result when handleClearSearch is called', async () => {
    const { sut } = makeSut();

    const hookMock = renderHook(() => sut.useViewModel());

    const { handleClearSearch, searchInputRef } = hookMock.result.current;

    await act(async () => {
      await handleClearSearch();
    });

    expect(hookMock.result.current.searchResult).toBeNull();
    expect(hookMock.result.current.isSearching).toBeFalsy();
    expect(searchInputRef.current).toBeNull();
  });
});
