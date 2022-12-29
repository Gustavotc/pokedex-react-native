import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container, SearchTextInput } from './Styles';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
};

export const SearchBar: React.FC<Props> = ({ placeholder, onChangeText }) => {
  return (
    <Container>
      <MaterialIcons name="search" size={24} />
      <SearchTextInput
        placeholder={placeholder}
        returnKeyType="search"
        onChangeText={onChangeText}
      />
    </Container>
  );
};
