/* eslint-disable no-param-reassign */
import { Evolution } from '@/domain/entities';
import { FetchEvolutions } from '@/domain/usecases';
import {
  EvolutionRepository,
  PokemonRepository,
} from '../protocols/repository';

export class FetchEvolutionsImpl implements FetchEvolutions {
  constructor(
    private readonly repository: EvolutionRepository,
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(id: number): Promise<Evolution[]> {
    const imagePromises: Promise<void>[] = [];

    const evolutions = await this.repository.getEvolutions(id);

    evolutions.forEach(evolution =>
      imagePromises.push(
        this.pokemonRepository.getById(evolution.name).then(pokemon => {
          evolution.imageUrl = pokemon?.imageUrl ?? null;
        }),
      ),
    );

    await Promise.all(imagePromises);

    return evolutions;
  }
}
