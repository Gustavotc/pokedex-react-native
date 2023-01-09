import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const EvolutionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const EvolutionContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const ImageContainer = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 12px;
  background-color: #f3f3f3;
  border-radius: 300px;
  border-color: black;
  border-width: 2px;
`;

export const EvolutionName = styled.Text`
  text-transform: capitalize;
  color: #6f797d;
`;

export const EvolutionLevel = styled.Text`
  color: #6f797d;
  font-size: 10px;
`;
