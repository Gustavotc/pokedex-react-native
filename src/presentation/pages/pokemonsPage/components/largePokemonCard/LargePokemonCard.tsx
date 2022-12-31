import React from 'react';
import { SvgUri } from 'react-native-svg';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';
import { TypeIcon } from '@/presentation/components';
import {
  CardContainer,
  NameRow,
  PokemonName,
  IndexText,
  StatusContainer,
  TypeText,
} from './Styles';
import { Pokemon } from '@/domain/entities';

import PokeBallSvg from '../../../../../../assets/images/PokeBallSvg.svg';

type Props = {
  pokemon: Pokemon;
  onPress: () => void;
};

export const LargePokemonCard: React.FC<Props> = ({ pokemon, onPress }) => {
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
        height={150}
        width={150}
        style={{ position: 'absolute', bottom: -16, right: -16 }}
        color="#ffffff40"
      />
      <SvgUri
        uri={pokemon.imageUrl}
        height={180}
        width={180}
        style={{ position: 'absolute', bottom: 4, right: 4 }}
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
