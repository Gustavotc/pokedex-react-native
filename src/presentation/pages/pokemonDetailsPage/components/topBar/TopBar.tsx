import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container, Title } from './Styles';

type Props = {
  title: string;
};

const TopBar: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <MaterialIcons
        name="arrow-back-ios"
        color="white"
        size={28}
        onPress={() => navigation.goBack()}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default TopBar;
