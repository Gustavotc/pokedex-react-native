import React from 'react';
import ContentLoader, { Circle } from 'react-content-loader/native';

const EvolutionSkeleton: React.FC = () => {
  return (
    <ContentLoader>
      <Circle cx="60" cy="65" r="45" />
      <Circle cx="170" cy="65" r="45" />
      <Circle cx="280" cy="65" r="45" />
    </ContentLoader>
  );
};

export default EvolutionSkeleton;
