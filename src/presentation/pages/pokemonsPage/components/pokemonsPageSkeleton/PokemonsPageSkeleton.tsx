import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

const PokemonsPageSkeleton: React.FC = () => {
  return (
    <ContentLoader>
      <Rect x="0" y="16" rx="16" width="48%" height="120" />
      <Rect x="50%" y="16" rx="16" width="48%" height="120" />

      <Rect x="0" y="144" rx="16" width="48%" height="120" />
      <Rect x="50%" y="144" rx="16" width="48%" height="120" />

      <Rect x="0" y="272" rx="16" width="48%" height="120" />
      <Rect x="50%" y="272" rx="16" width="48%" height="120" />
    </ContentLoader>
  );
};

export default PokemonsPageSkeleton;
