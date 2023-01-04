import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  color: string;
  selected: boolean;
}>`
  align-self: flex-start;
  padding: 1px 4px;
  margin-right: 8px;

  ${({ selected, color }) => {
    if (selected) {
      return css`
        border-bottom-width: 1px;
        border-bottom-color: ${color};
      `;
    }
    return null;
  }}
`;

export const Title = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 16px;
`;
