import { EvolutionResponse } from '@/data/models';
import { Evolution } from '@/domain/entities';
import { DomainMapper } from './DomainMapper';

export class EvolutionMapper implements DomainMapper<Evolution[]> {
  toDomain(json: EvolutionResponse): Evolution[] {
    const evolutions: Evolution[] = [];
    let data = json.chain;

    do {
      const numberOfEvolutions = data.evolves_to.length;

      evolutions.push({
        name: data.species.name,
        minLevel: data?.evolution_details[0]?.min_level ?? 0,
        imageUrl: null,
      });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i += 1) {
          evolutions.push({
            name: data.evolves_to[i].species.name,
            minLevel: !data.evolves_to[i]
              ? 1
              : data.evolves_to[i].evolution_details[0].min_level,
            imageUrl: null,
          });
        }
      }

      [data] = data.evolves_to;
    } while (data && data.evolves_to.length > 0);

    evolutions.push({
      name: data.species.name,
      minLevel: data?.evolution_details[0]?.min_level ?? 0,
      imageUrl: null,
    });

    return evolutions;
  }
}
