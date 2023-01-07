import {
  FlavorTextResponse,
  GeneraResponse,
  SpecieResponse,
} from '@/data/models';
import { Specie } from '@/domain/entities';
import { DomainMapper } from './DomainMapper';

export class SpecieMapper implements DomainMapper<Specie> {
  private mapDescription(entries: FlavorTextResponse[]) {
    const description = entries.filter(item => item.language.name === 'en')[0];
    return description.flavor_text.replace(/[\n\r]/g, ' ');
  }

  private mapSpecie(genera: GeneraResponse[]) {
    return genera.filter(item => item.language.name === 'en')[0].genus;
  }

  private mapEvolutionId(url: string) {
    return Number(
      url
        .split('https://pokeapi.co/api/v2/evolution-chain/')[1]
        .replace('/', ''),
    );
  }

  toDomain(json: SpecieResponse): Specie {
    return {
      color: json.color.name,
      description: this.mapDescription(json.flavor_text_entries),
      specie: this.mapSpecie(json.genera),
      habitat: json?.habitat?.name ?? null,
      evolutionId: this.mapEvolutionId(json.evolution_chain.url),
    };
  }
}
