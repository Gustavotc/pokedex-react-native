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

type Props = {
  pokemon: Pokemon;
};

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <CardContainer color={PokemonTypeColorEnum[pokemon.types[0]]}>
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
      <SvgUri
        uri={pokemon.imageUrl}
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
