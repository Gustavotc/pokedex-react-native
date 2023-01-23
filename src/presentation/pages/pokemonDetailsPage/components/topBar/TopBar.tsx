import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Title } from './Styles';

type Props = {
  title: string;
};

const TopBar: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container topInset={insets.top}>
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
