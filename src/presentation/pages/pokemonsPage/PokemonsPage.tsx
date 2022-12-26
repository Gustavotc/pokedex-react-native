import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { PokemonsPageViewModel } from '@/data/protocols/viewModel';

import { Container, Text } from './Styles';

type Props = {
  viewModel: PokemonsPageViewModel;
};

const PokemonsPage: React.FC<Props> = ({ viewModel }) => {
  const { pokemons, error, fetchPokemons } = viewModel.useViewModel();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <Text>Pokemons</Text>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </Container>
  );
};

export default PokemonsPage;
