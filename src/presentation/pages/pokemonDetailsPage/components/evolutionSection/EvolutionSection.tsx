import React from 'react';
import { Evolution } from '@/domain/entities';
import { PokemonImage } from '@/presentation/components';

import {
  Container,
  EvolutionRow,
  EvolutionContainer,
  ImageContainer,
  EvolutionName,
  EvolutionLevel,
} from './Styles';

type Props = {
  evolutions: Evolution[];
};

const EvolutionSection: React.FC<Props> = ({ evolutions }) => {
  const renderEvolution = (evolution: Evolution) => {
    return (
      <EvolutionContainer key={evolution.name}>
        <ImageContainer size={90}>
          <PokemonImage
            imageUri={evolution.imageUrl ?? ''}
            height={64}
            width={64}
          />
        </ImageContainer>
        <EvolutionName>{evolution.name}</EvolutionName>
        <EvolutionLevel>{`Min Lvl: ${
          evolution.minLevel === 0 ? 'None' : evolution.minLevel
        }`}</EvolutionLevel>
      </EvolutionContainer>
    );
  };

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 24 }}
    >
      <EvolutionRow>{evolutions.map(renderEvolution)}</EvolutionRow>
    </Container>
  );
};

export default EvolutionSection;
