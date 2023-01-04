import React from 'react';

import { Container, Title } from './Styles';

type Props = {
  title: string;
  color: string;
  selected: boolean;
  onPress: (page: string) => void;
};

const MenuButton: React.FC<Props> = ({ title, color, selected, onPress }) => {
  return (
    <Container
      color={color}
      selected={selected}
      activeOpacity={0.7}
      onPress={() => onPress(title)}
    >
      <Title color={color}>{title}</Title>
    </Container>
  );
};

export default MenuButton;
