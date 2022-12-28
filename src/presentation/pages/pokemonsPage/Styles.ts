import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 16px;
`;

export const TitleText = styled.Text`
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: bold;
`;

export const CardContainer = styled.View`
  background-color: #e4000f;
  height: 120px;
  width: 49%;
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
  justify-content: space-between;
  align-items: center;
`;

export const IndexText = styled.Text`
  font-size: 16px;
  color: #f3f3f390;
`;
