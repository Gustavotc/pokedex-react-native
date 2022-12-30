import styled from 'styled-components/native';

export const CardContainer = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 200px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  border-radius: 16px;
  padding: 16px;
  elevation: 3;
`;

export const PokemonName = styled.Text`
  font-size: 18px;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
`;

export const NameRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IndexText = styled.Text`
  font-size: 16px;
  color: #f3f3f390;
  margin-left: 8px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  background-color: #f3f3f340;
  border-radius: 100px;
  padding: 0px 8px;
  flex-wrap: wrap;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const TypeText = styled.Text`
  color: white;
  font-size: 12px;
  text-transform: capitalize;
  margin-right: 4px;
`;
