import { Evolution } from '@/domain/entities';
import { FetchEvolutions } from '@/domain/usecases';
import { EvolutionRepository } from '../protocols/repository';

export class FetchEvolutionsImpl implements FetchEvolutions {
  constructor(private readonly repository: EvolutionRepository) {}

  execute(id: number): Promise<Evolution[]> {
    return this.repository.getEvolutions(id);
  }
}
