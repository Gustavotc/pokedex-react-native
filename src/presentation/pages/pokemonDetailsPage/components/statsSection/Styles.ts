import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 24px;
`;

export const StatRow = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const StatName = styled.Text`
  text-transform: capitalize;
  width: 90px;
`;

export const StatValue = styled.Text`
  margin-left: 16px;
  width: 30px;
`;
