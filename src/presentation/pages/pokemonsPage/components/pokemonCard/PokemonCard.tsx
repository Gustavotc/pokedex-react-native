import React from 'react';
import { SvgUri } from 'react-native-svg';
import { Pokemon } from '@/domain/entities';

import {
  CardContainer,
  IndexText,
  NameRow,
  PokemonName,
  StatusContainer,
  TypeText,
} from './Styles';

import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';
import { TypeIcon } from '@/presentation/components';

import PokeBallSvg from '../../../../../../assets/images/PokeBallSvg.svg';
import PokemonImage from '@/presentation/pages/pokemonDetailsPage/components/pokemonImage/PokemonImage';

type Props = {
  pokemon: Pokemon;
  onPress: () => void;
};

export const PokemonCard: React.FC<Props> = ({ pokemon, onPress }) => {
  return (
    <CardContainer
      color={PokemonTypeColorEnum[pokemon.types[0]]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <NameRow>
        <PokemonName>{pokemon.name}</PokemonName>
        <IndexText>{`#${pokemon.id}`}</IndexText>
      </NameRow>
      <PokeBallSvg
        height={100}
        width={100}
        style={{ position: 'absolute', bottom: -16, right: -16 }}
        color="#ffffff40"
      />
      <PokemonImage
        imageUri={pokemon.imageUrl}
        height={70}
        width={70}
        style={{ position: 'absolute', bottom: 8, right: 4 }}
      />

      {pokemon.types.map(type => (
        <StatusContainer key={type}>
          <TypeText>{type}</TypeText>
          <TypeIcon type={type} />
        </StatusContainer>
      ))}
    </CardContainer>
  );
};
