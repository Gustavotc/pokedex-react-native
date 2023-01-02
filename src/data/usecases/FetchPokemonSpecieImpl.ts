import { Specie } from '@/domain/entities';
import { FetchPokemonSpecie } from '@/domain/usecases';
import { SpecieRepository } from '../protocols/repository';

export class FetchPokemonSpecieImpl implements FetchPokemonSpecie {
  constructor(private readonly especieRepository: SpecieRepository) {}

  execute(id: string | number): Promise<Specie | null> {
    return this.especieRepository.get(id);
  }
}
