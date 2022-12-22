import { PokemonResponse } from "@/data/models";
import { Pokemon } from "@/domain/entities";
import { DomainMapper } from ".";

export class PokemonMapper implements DomainMapper<Pokemon> {
  toDomain(json: PokemonResponse): Pokemon {
    return {
      id: json.id,
      name: json.name,
      imageUrl: json.sprites.other.dream_world.front_default,
      height: json.height,
      weight: json.weight,
      stats: json.stats[0].stat.name,
    };
  }
}
