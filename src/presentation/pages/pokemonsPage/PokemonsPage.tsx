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
} from './Styles';
import { Pokemon } from '@/domain/entities';

type Props = {
  viewModel: PokemonsPageViewModel;
};

const PokemonsPage: React.FC<Props> = ({ viewModel }) => {
  const { pokemons, error, loading, fetchPokemons } = viewModel.useViewModel();

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
      <CardContainer>
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
      </CardContainer>
    );
  };

  return (
    <Container>
      <TitleText>Pokedex</TitleText>
      <FlatList
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
