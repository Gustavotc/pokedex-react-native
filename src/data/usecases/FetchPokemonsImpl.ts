import { Pokemon } from '@/domain/entities';
import { PokemonRepository } from '@/data/protocols/repository';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';

export default class FetchPokemonsImpl implements FetchPokemons {
  constructor(private readonly repository: PokemonRepository) {}

  execute(): Promise<Pokemon[]> {
    return this.repository.get();
  }
}
