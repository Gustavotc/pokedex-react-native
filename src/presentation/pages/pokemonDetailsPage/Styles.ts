import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<{ color?: string }>`
  background-color: ${({ color }) => color};
  height: 45%;
  margin-bottom: -24px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px;
  padding-top: 48px;
  padding-bottom: 8px;
`;

export const PokemonDescription = styled.Text`
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
