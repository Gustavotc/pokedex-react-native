import React from 'react';
import { View } from 'react-native';
import { PokemonType } from '@/domain/entities';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';

import Bug from '../../../../assets/images/pokemonTypes/Bug.svg';
import Dark from '../../../../assets/images/pokemonTypes/Dark.svg';
import Dragon from '../../../../assets/images/pokemonTypes/Dragon.svg';
import Electric from '../../../../assets/images/pokemonTypes/Electric.svg';
import Fairy from '../../../../assets/images/pokemonTypes/Fairy.svg';
import Fighting from '../../../../assets/images/pokemonTypes/Fighting.svg';
import Fire from '../../../../assets/images/pokemonTypes/Fire.svg';
import Flying from '../../../../assets/images/pokemonTypes/Flying.svg';
import Ghost from '../../../../assets/images/pokemonTypes/Ghost.svg';
import Grass from '../../../../assets/images/pokemonTypes/Grass.svg';
import Ground from '../../../../assets/images/pokemonTypes/Ground.svg';
import Ice from '../../../../assets/images/pokemonTypes/Ice.svg';
import Normal from '../../../../assets/images/pokemonTypes/Normal.svg';
import Poison from '../../../../assets/images/pokemonTypes/Poison.svg';
import Psychic from '../../../../assets/images/pokemonTypes/Psychic.svg';
import Rock from '../../../../assets/images/pokemonTypes/Rock.svg';
import Steel from '../../../../assets/images/pokemonTypes/Steel.svg';
import Water from '../../../../assets/images/pokemonTypes/Water.svg';

type Props = {
  type: PokemonType;
  iconSize?: number;
  containerSize?: number;
};

export const TypeIcon: React.FC<Props> = ({
  type,
  iconSize = 8,
  containerSize = 12,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'bug':
        return <Bug height={iconSize} width={iconSize} />;
      case 'dark':
        return <Dark height={iconSize} width={iconSize} />;
      case 'dragon':
        return <Dragon height={iconSize} width={iconSize} />;
      case 'electric':
        return <Electric height={iconSize} width={iconSize} />;
      case 'fairy':
        return <Fairy height={iconSize} width={iconSize} />;
      case 'fighting':
        return <Fighting height={iconSize} width={iconSize} />;
      case 'fire':
        return <Fire height={iconSize} width={iconSize} />;
      case 'flying':
        return <Flying height={iconSize} width={iconSize} />;
      case 'ghost':
        return <Ghost height={iconSize} width={iconSize} />;
      case 'grass':
        return <Grass height={iconSize} width={iconSize} />;
      case 'ground':
        return <Ground height={iconSize} width={iconSize} />;
      case 'ice':
        return <Ice height={iconSize} width={iconSize} />;
      case 'normal':
        return <Normal height={iconSize} width={iconSize} />;
      case 'poison':
        return <Poison height={iconSize} width={iconSize} />;
      case 'psychic':
        return <Psychic height={iconSize} width={iconSize} />;
      case 'rock':
        return <Rock height={iconSize} width={iconSize} />;
      case 'steel':
        return <Steel height={iconSize} width={iconSize} />;
      case 'water':
        return <Water height={iconSize} width={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        backgroundColor: PokemonTypeColorEnum[type],
        borderRadius: 100,
        height: containerSize,
        width: containerSize,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {getIcon()}
    </View>
  );
};
