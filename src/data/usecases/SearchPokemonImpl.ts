import { Pokemon } from '@/domain/entities';
import { SearchPokemon } from '@/domain/usecases/SearchPokemon';
import { PokemonRepository } from '../protocols/repository';

export class SearchPokemonImpl implements SearchPokemon {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(id: string | number): Promise<Pokemon | null> {
    return this.pokemonRepository.getById(id);
  }
}
