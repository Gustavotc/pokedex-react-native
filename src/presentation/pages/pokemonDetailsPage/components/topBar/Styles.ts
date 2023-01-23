import styled from 'styled-components/native';

export const Container = styled.View<{ topInset: number }>`
  width: 100%;
  height: 56px;
  flex-direction: row;
  position: absolute;
  top: ${({ topInset }) => topInset}px;
  left: 0px;
  align-items: center;
  padding: 0px 24px;
`;

export const Title = styled.Text`
  flex: 1;
  color: white;
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;
  margin-right: 32px;
`;
