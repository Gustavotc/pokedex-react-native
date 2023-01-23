import styled from 'styled-components/native';

export const Container = styled.SafeAreaView<{ topInset: number }>`
  flex: 1;
  padding: 16px;
  padding-bottom: 0px;
  padding-top: ${({ topInset }) => topInset + 8}px;
  background-color: white;
`;

export const TitleText = styled.Text`
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: bold;
`;
