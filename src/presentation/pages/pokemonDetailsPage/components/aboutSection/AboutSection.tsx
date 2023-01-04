import React from 'react';
import { Pokemon, PokemonType } from '@/domain/entities';
import InfoText from '../infoText/InfoText';

import {
  Container,
  PokemonDescription,
  TypesContainer,
  TypeTag,
  TypeText,
} from './Styles';
import { TypeIcon } from '@/presentation/components';

type Props = {
  pokemon: Pokemon | null;
  getPokemonAbilities: () => string;
};

const AboutSection: React.FC<Props> = ({ pokemon, getPokemonAbilities }) => {
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
      <PokemonDescription>
        {pokemon?.specie?.description ?? 'No description found'}
      </PokemonDescription>
      <InfoText label="Category">
        {pokemon?.specie?.specie.replace('Pokémon', '') ?? 'no category found'}
      </InfoText>
      <InfoText label="Height">
        {`${(pokemon?.height ?? 0) / 10} meters`}
      </InfoText>
      <InfoText label="Weight">{`${(pokemon?.weight ?? 0) / 10} kg`}</InfoText>
      <InfoText label="Habitat">
        {pokemon?.specie?.habitat ?? 'no habitat found'}
      </InfoText>
      <InfoText label="Abilities">{getPokemonAbilities()}</InfoText>
      <TypesContainer>{pokemon?.types.map(renderType)}</TypesContainer>
    </Container>
  );
};

export default AboutSection;
