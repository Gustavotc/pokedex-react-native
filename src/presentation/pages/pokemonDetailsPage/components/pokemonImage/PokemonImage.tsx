import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';
import { SvgUri } from 'react-native-svg';

type Props = {
  imageUri: string;
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ImageStyle>;
};

const PokemonImage: React.FC<Props> = ({ imageUri, height, width, style }) => {
  const renderImage = () => {
    if (imageUri.includes('svg')) {
      return (
        <SvgUri uri={imageUri} height={height} width={width} style={style} />
      );
    }

    return (
      <Image source={{ uri: imageUri }} style={[style, { height, width }]} />
    );
  };

  return renderImage();
};

export default PokemonImage;
