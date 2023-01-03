import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SvgUri } from 'react-native-svg';
import { StackRoutesParamsList } from '@/presentation/routes/Stack.routes';

import {
  Container,
  Header,
  InfoContainer,
  PokemonDescription,
  TypesContainer,
  TypeTag,
  TypeText,
} from './Styles';
import TopBar from './components/topBar/TopBar';
import { PokemonDetailsPageViewModel } from '@/presentation/viewModel';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';
import InfoText from './components/infoText/InfoText';
import { TypeIcon } from '@/presentation/components';
import { PokemonType } from '@/domain/entities';

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

  const { pokemon, loading, init, getPokemonAbilities } =
    viewModel.useViewModel();

  useEffect(() => {
    init(pokemonName);
  }, []);

  const renderType = (type: PokemonType) => {
    return (
      <TypeTag key={type}>
        <TypeIcon type={type} iconSize={16} containerSize={24} />
        <TypeText>{type}</TypeText>
      </TypeTag>
    );
  };

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
        <PokemonDescription>{pokemon?.specie?.description}</PokemonDescription>
        <InfoText label="Category">
          {pokemon?.specie?.specie.replace('Pokémon', '') ??
            'no category found'}
        </InfoText>
        <InfoText label="Height">
          {`${(pokemon?.height ?? 0) / 10} meters`}
        </InfoText>
        <InfoText label="Weight">
          {`${(pokemon?.weight ?? 0) / 10} kg`}
        </InfoText>
        <InfoText label="Habitat">
          {pokemon?.specie?.habitat ?? 'no habitat found'}
        </InfoText>
        <InfoText label="Abilities">{getPokemonAbilities()}</InfoText>
        <TypesContainer>{pokemon?.types.map(renderType)}</TypesContainer>
      </InfoContainer>
    </Container>
  );
};

export default PokemonDetailsPage;
