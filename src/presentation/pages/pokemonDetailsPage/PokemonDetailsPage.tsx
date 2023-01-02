import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { StackRoutesParamsList } from '@/presentation/routes/Stack.routes';

import { Container, Header, InfoContainer, PokemonDescription } from './Styles';
import TopBar from './components/topBar/TopBar';
import { PokemonDetailsPageViewModel } from '@/presentation/viewModel';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';

type PokemonDetailsPageProps = RouteProp<
  StackRoutesParamsList,
  'PokemonDetailsPage'
>;

type Props = {
  viewModel: PokemonDetailsPageViewModel;
};

const PokemonDetailsPage: React.FC<Props> = ({ viewModel }) => {
  const route = useRoute<PokemonDetailsPageProps>();
  const { pokemonName } = route.params;

  const { pokemon, loading, init } = viewModel.useViewModel();

  useEffect(() => {
    init(pokemonName);
  }, []);

  return (
    <Container>
      <Header color={PokemonTypeColorEnum[pokemon?.types[0] ?? 'normal']}>
        <TopBar title={pokemonName} />
      </Header>
      <SvgUri
        uri={pokemon?.imageUrl ?? null}
        height="35%"
        width="80%"
        style={{
          position: 'absolute',
          top: 100,
          left: '10%',
          zIndex: 1,
        }}
      />
      <InfoContainer>
        <Text>Pokemon Info</Text>
        <PokemonDescription>{pokemon?.specie?.description}</PokemonDescription>
        <Text>{`${(pokemon?.height ?? 0) / 10} meters`}</Text>
        <Text>{`${pokemon?.weight} hectograms = ${
          (pokemon?.weight ?? 0) / 10
        }kg`}</Text>
        <Text>{pokemon?.specie?.specie}</Text>
        <Text>{pokemon?.specie?.habitat}</Text>
      </InfoContainer>
    </Container>
  );
};

export default PokemonDetailsPage;
