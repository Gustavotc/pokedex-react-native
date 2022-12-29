import {
  PokemonResponse,
  PokemonStatsJson,
  PokemonTypesJson,
} from '@/data/models';
import { Pokemon } from '@/domain/entities';
import { DomainMapper } from '.';

export class PokemonMapper implements DomainMapper<Pokemon> {
  private mapStats(statsJson: PokemonStatsJson) {
    return statsJson.map(stat => {
      return {
        name: stat.stat.name,
        baseStat: stat.base_stat,
      };
    });
  }

  private mapTypes(typesJson: PokemonTypesJson) {
    return typesJson.map(type => type.type.name);
  }

  toDomain(json: PokemonResponse): Pokemon {
    return {
      id: json.id,
      name: json.name,
      imageUrl: json.sprites.other.dream_world.front_default,
      height: json.height,
      weight: json.weight,
      stats: this.mapStats(json.stats),
      types: this.mapTypes(json.types),
    };
  }
}
