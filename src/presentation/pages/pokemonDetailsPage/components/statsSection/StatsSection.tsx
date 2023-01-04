import React from 'react';
import { View } from 'react-native';

import { Container, StatName, StatRow, StatValue } from './Styles';

type Props = {
  stats: { name: string; baseStat: number }[];
  color: string;
};

const StatsSection: React.FC<Props> = ({ stats, color }) => {
  return (
    <Container>
      {stats.map(stat => (
        <StatRow key={stat.name}>
          <StatName>{stat.name.replace('special-', 'Sp .')}</StatName>
          <View style={{ backgroundColor: color, flex: 1 }} />
          <StatValue>{stat.baseStat}</StatValue>
        </StatRow>
      ))}
    </Container>
  );
};

export default StatsSection;
