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

export const TabsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
