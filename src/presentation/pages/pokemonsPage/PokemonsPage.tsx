import React, { useEffect } from 'react';
import { SvgUri } from 'react-native-svg';

import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { PokemonsPageViewModel } from '@/data/protocols/viewModel';

import PokeBallSvg from '../../../../assets/images/PokeBallSvg.svg';

import {
  Container,
  TitleText,
  CardContainer,
  PokemonName,
  NameRow,
  IndexText,
  StatusContainer,
  TypeText,
} from './Styles';
import { Pokemon } from '@/domain/entities';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';
import { TypeIcon, SearchBar } from '@/presentation/components';

type Props = {
  viewModel: PokemonsPageViewModel;
};

const PokemonsPage: React.FC<Props> = ({ viewModel }) => {
  const { pokemons, error, loading, fetchPokemons, handleSearchTextChange } =
    viewModel.useViewModel();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ height: 100 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const renderItem: ListRenderItem<Pokemon> = ({ item }) => {
    return (
      <CardContainer color={PokemonTypeColorEnum[item.types[0]]}>
        <NameRow>
          <PokemonName>{item.name}</PokemonName>
          <IndexText>{`#${item.id}`}</IndexText>
        </NameRow>
        <PokeBallSvg
          height={100}
          width={100}
          style={{ position: 'absolute', bottom: -16, right: -16 }}
          color="#ffffff40"
        />
        <SvgUri
          uri={item.imageUrl}
          height={70}
          width={70}
          style={{ position: 'absolute', bottom: 8, right: 4 }}
        />
        {item.types.map(type => (
          <StatusContainer key={type}>
            <TypeText>{type}</TypeText>
            <TypeIcon type={type} />
          </StatusContainer>
        ))}
      </CardContainer>
    );
  };

  return (
    <Container>
      <TitleText>Pokédex</TitleText>
      <SearchBar
        placeholder="What Pokémon are you looking for?"
        onChangeText={handleSearchTextChange}
      />
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
    </Container>
  );
};

export default PokemonsPage;
