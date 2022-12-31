import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { StackRoutesParamsList } from '@/presentation/routes/Stack.routes';

import { Container, Header, InfoContainer } from './Styles';
import TopBar from './components/topBar/TopBar';

type PokemonDetailsPageProps = RouteProp<
  StackRoutesParamsList,
  'PokemonDetailsPage'
>;

const PokemonDetailsPage: React.FC = () => {
  const route = useRoute<PokemonDetailsPageProps>();
  const { pokemonName } = route.params;
  return (
    <Container>
      <Header>
        <TopBar title={pokemonName} />
      </Header>
      <InfoContainer>
        <Text>Pokemon Info</Text>
      </InfoContainer>
    </Container>
  );
};

export default PokemonDetailsPage;
