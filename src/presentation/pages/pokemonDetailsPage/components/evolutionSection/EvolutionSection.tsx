import React from 'react';
import Animated, { FadeIn, FlipInEasyY } from 'react-native-reanimated';
import { Evolution } from '@/domain/entities';
import { PokemonImage } from '@/presentation/components';

import {
  Container,
  EvolutionRow,
  EvolutionContainer,
  ImageContainer,
  EvolutionName,
  EvolutionLevel,
  NoEvolutionText,
  NoEvolutionContainer,
} from './Styles';

type Props = {
  evolutions: Evolution[];
};

const EvolutionSection: React.FC<Props> = ({ evolutions }) => {
  const renderEvolution = (evolution: Evolution) => {
    return (
      <Animated.View key={evolution.name} entering={FlipInEasyY.duration(500)}>
        <EvolutionContainer>
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
      </Animated.View>
    );
  };

  if (evolutions.length === 0) {
    return (
      <NoEvolutionContainer>
        <NoEvolutionText>This pokémon has no evolution</NoEvolutionText>
      </NoEvolutionContainer>
    );
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 24,
        flexGrow: 1,
      }}
    >
      <Animated.View entering={FadeIn}>
        <EvolutionRow fullRow={evolutions.length > 2}>
          {evolutions.map(renderEvolution)}
        </EvolutionRow>
      </Animated.View>
    </Container>
  );
};

export default EvolutionSection;
