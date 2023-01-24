import styled from 'styled-components/native';

export const PokemonDescription = styled.Text`
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
`;

export const TypeTag = styled.View`
  flex-direction: row;
  margin-right: 8px;
  background-color: #f3f3f3;
  align-items: center;
  padding: 4px 8px;
  border-radius: 30px;
`;

export const TypeText = styled.Text`
  margin-left: 8px;
  text-transform: capitalize;
`;
