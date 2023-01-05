import React from 'react';
import AnimatedProgressBar from '../animatedProgressBar/AnimatedProgressBar';

import { Container, StatName, StatRow, StatValue } from './Styles';

type Props = {
  stats: { name: string; baseStat: number }[];
  color: string;
};

const StatsSection: React.FC<Props> = ({ stats, color }) => {
  const maxStatValue = Math.max(...stats.map(stat => stat.baseStat));

  return (
    <Container>
      {stats.map(stat => (
        <StatRow key={stat.name}>
          <StatName>{stat.name.replace('special-', 'Sp .')}</StatName>
          <AnimatedProgressBar
            value={stat.baseStat}
            maxValue={maxStatValue}
            color={color}
          />
          <StatValue>{stat.baseStat}</StatValue>
        </StatRow>
      ))}
    </Container>
  );
};

export default StatsSection;
