import React from 'react';

import { Container, Title, Body, Tip } from './Styles';

import PsyduckSvg from '../../../../../../assets/images/Psyduck.svg';

export const NoPokemonFound: React.FC = () => {
  return (
    <Container>
      <Title>No Pokémon Found</Title>
      <Body>
        No result was found for your search, please check if the Pokémon name is
        correct.
      </Body>
      <Tip>Tip: you can also search for the pokemon id.</Tip>
      <PsyduckSvg height={100} width={100} />
    </Container>
  );
};
