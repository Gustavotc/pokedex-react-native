import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

const DetailsPageSkeleton: React.FC = () => {
  return (
    <ContentLoader backgroundColor="#d8d8d8" foregroundColor="#FFF">
      <Rect x="0" y="45%" rx="32" width="100%" height="70%" />
    </ContentLoader>
  );
};

export default DetailsPageSkeleton;
