import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { TextInput } from 'react-native';
import { Container, SearchTextInput } from './Styles';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  inputRef?: React.Ref<TextInput>;
  showClearBtn?: boolean;
  clearFn?: () => void;
};

export const SearchBar: React.FC<Props> = ({
  placeholder,
  onChangeText,
  inputRef,
  showClearBtn = false,
  clearFn,
}) => {
  return (
    <Container>
      <MaterialIcons name="search" size={24} />
      <SearchTextInput
        placeholder={placeholder}
        returnKeyType="search"
        onChangeText={onChangeText}
        ref={inputRef}
      />
      {showClearBtn && (
        <MaterialIcons name="close" size={14} onPress={clearFn} />
      )}
    </Container>
  );
};
