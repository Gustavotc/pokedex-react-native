import React, { useEffect } from 'react';

import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { PokemonsPageViewModel } from '@/presentation/viewModel';

import { Container, TitleText } from './Styles';
import { Pokemon } from '@/domain/entities';
import { SearchBar } from '@/presentation/components';
import { PokemonCard, NoPokemonFound, LargePokemonCard } from './components';

type Props = {
  viewModel: PokemonsPageViewModel;
};

const PokemonsPage: React.FC<Props> = ({ viewModel }) => {
  const {
    pokemons,
    error,
    loading,
    searchResult,
    searchInputRef,
    isSearching,
    fetchPokemons,
    handleSearchTextChange,
    handleClearSearch,
  } = viewModel.useViewModel();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ height: 150 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const renderItem: ListRenderItem<Pokemon> = ({ item }) => {
    return <PokemonCard pokemon={item} />;
  };

  const showMainLoading =
    (isSearching && loading) || (pokemons.length === 0 && loading);

  return (
    <Container>
      <TitleText>Pokédex</TitleText>
      <SearchBar
        placeholder="What Pokémon are you looking for?"
        onChangeText={handleSearchTextChange}
        inputRef={searchInputRef}
        showClearBtn={isSearching}
        clearFn={handleClearSearch}
      />
      {pokemons.length > 0 && !isSearching && (
        <FlatList
          style={{ marginTop: 16 }}
          data={pokemons}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={renderItem}
          onEndReached={fetchPokemons}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={renderFooter}
        />
      )}

      {showMainLoading && (
        <ActivityIndicator size="large" style={{ marginTop: 32 }} />
      )}

      {isSearching && searchResult && (
        <LargePokemonCard pokemon={searchResult} />
      )}

      {isSearching && !searchResult && !loading && <NoPokemonFound />}
    </Container>
  );
};

export default PokemonsPage;
